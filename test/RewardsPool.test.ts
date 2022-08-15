// Copyright (C) 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0-or-later

import {expect} from 'chai';
import {ethers, waffle} from 'hardhat';
import {BigNumber} from 'ethers';
import {deployContracts} from './setup';
import {METADATA_HASH, deploymentIds} from './constants';
import {IndexerRegistry, RewardsDistributer, RewardsHelper, RewardsPool, EraManager, SQToken, Staking} from '../src';
import {startNewEra, time, etherParse, timeTravel} from './helper';

describe('RewardsPool Contract', () => {
    const deploymentId0 = deploymentIds[0];
    const deploymentId1 = deploymentIds[1];
    const deploymentId2 = deploymentIds[2];

    const mockProvider = waffle.provider;
    let root, indexer0, indexer1, indexer2, delegator0, delegator1;

    let token: SQToken;
    let staking: Staking;
    let indexerRegistry: IndexerRegistry;
    let eraManager: EraManager;
    let rewardsDistributer: RewardsDistributer;
    let rewardsHelper: RewardsHelper;
    let rewardsPool: RewardsPool;

    // Rewrite registerIndexer to register indexer with stakeAmount and commission rate.
    const registerIndexer = async (rootWallet, wallet, amount, rate) => {
        await token.connect(rootWallet).transfer(wallet.address, amount);
        await token.connect(wallet).increaseAllowance(staking.address, amount);
        await indexerRegistry.connect(wallet).registerIndexer(amount, METADATA_HASH, rate, {gasLimit: '2000000'});
    };

    beforeEach(async () => {
        [root, indexer0, indexer1, indexer2, delegator0, delegator1] = await ethers.getSigners();
        // Contract deployed start at era 1.
        const deployment = await deployContracts(root, indexer0);
        indexerRegistry = deployment.indexerRegistry;
        staking = deployment.staking;
        token = deployment.token;
        rewardsDistributer = deployment.rewardsDistributer;
        rewardsHelper = deployment.rewardsHelper;
        rewardsPool = deployment.rewardsPool;
        eraManager = deployment.eraManager;

        // Init indexer and delegator account.
        await token.connect(root).transfer(indexer0.address, etherParse('10'));
        await token.connect(root).transfer(indexer1.address, etherParse('10'));
        await token.connect(root).transfer(indexer2.address, etherParse('10'));
        await token.connect(root).transfer(delegator0.address, etherParse('10'));
        await token.connect(root).transfer(delegator1.address, etherParse('10'));
        await token.connect(delegator0).increaseAllowance(staking.address, etherParse('10'));
        await token.connect(delegator1).increaseAllowance(staking.address, etherParse('10'));
        await token.connect(root).increaseAllowance(rewardsDistributer.address, etherParse('10'));
        await token.connect(root).increaseAllowance(rewardsPool.address, etherParse('100'));

        // Setup era period be 5 days.
        await eraManager.connect(root).updateEraPeriod(time.duration.days(1).toString());

        // Moved to era 2.
        await registerIndexer(root, root, etherParse('10'), 1e5);
        await registerIndexer(root, indexer0, etherParse('10'), 1e5);
        await registerIndexer(root, indexer1, etherParse('10'), 1e5);
        await registerIndexer(root, indexer2, etherParse('10'), 1e5);
    });

    describe('workflow', async () => {
        it('Directly rewards also will work correctly', async () => {
            const era = await eraManager.eraNumber();
            const indexerAmount0 = etherParse('1');
            const indexerAmount1 = etherParse('2');
            const indexerAmount2 = etherParse('3');
            await rewardsPool.connect(root).labor(deploymentId0, indexer0.address, indexerAmount0);
            await rewardsPool.connect(root).labor(deploymentId0, indexer1.address, indexerAmount1);
            await rewardsPool.connect(root).labor(deploymentId0, indexer2.address, indexerAmount2);
            await rewardsPool.connect(root).labor(deploymentId1, indexer0.address, indexerAmount0);
            await rewardsPool.connect(root).labor(deploymentId2, indexer1.address, indexerAmount1);

            // Check the status.
            const rewards1 = await rewardsPool.getReward(deploymentId0, era, indexer0.address);
            expect(rewards1[0]).to.be.eq(etherParse('1')); // labor
            expect(rewards1[1]).to.be.eq(etherParse('6')); // reward

            await timeTravel(mockProvider, time.duration.days(1).toNumber());

            // Start collect.
            await rewardsPool.collect(deploymentId0, indexer0.address);
            // Check the status.
            const rewards2 = await rewardsPool.getReward(deploymentId0, era, indexer0.address);
            expect(rewards2[0]).to.be.eq(0); // claimed
            expect(rewards2[1]).to.be.eq(etherParse('6')); // reward
            await expect(rewardsPool.collect(deploymentId0, indexer0.address)).to.be.revertedWith('No reward');

            await rewardsPool.collect(deploymentId0, indexer1.address);
            await rewardsPool.collect(deploymentId0, indexer2.address);
            const rewards3 = await rewardsPool.getReward(deploymentId0, era, indexer0.address);
            expect(rewards3[0]).to.be.eq(0); // claimed
            expect(rewards3[1]).to.be.eq(0); // deleted

            await rewardsPool.collect(deploymentId1, indexer0.address);
            await rewardsPool.collect(deploymentId2, indexer1.address);
            // Check the status.
            const rewards4 = await rewardsPool.getReward(deploymentId1, era, indexer0.address);
            const rewards5 = await rewardsPool.getReward(deploymentId2, era, indexer1.address);
            expect(rewards4[0]).to.be.eq(0); // claimed
            expect(rewards4[1]).to.be.eq(0); // deleted
            expect(rewards5[0]).to.be.eq(0); // claimed
            expect(rewards5[1]).to.be.eq(0); // deleted
        });

        it('RewardsDistributer will blocked when pool not collect', async () => {
            await startNewEra(mockProvider, eraManager);
            await rewardsDistributer.collectAndDistributeRewards(indexer0.address);
            await staking.connect(delegator0).delegate(indexer0.address, etherParse('1'));

            const era = await eraManager.eraNumber();
            const indexerAmount0 = etherParse('1');
            await rewardsPool.connect(root).labor(deploymentId0, indexer0.address, indexerAmount0);

            await startNewEra(mockProvider, eraManager);

            await expect(rewardsDistributer.applyStakeChange(indexer0.address, delegator0.address)).to.be.revertedWith(
                'Rewards not collected'
            );
            await rewardsDistributer.collectAndDistributeRewards(indexer0.address);
            await expect(rewardsDistributer.applyStakeChange(indexer0.address, delegator0.address)).to.be.revertedWith(
                'Rewards Pool not collected'
            );
            await rewardsPool.collect_era(era, deploymentId0, indexer0.address);

            // Apply RewardsDistributer status again. will success.
            await rewardsDistributer.applyStakeChange(indexer0.address, delegator0.address);
        });

        it('Batch collect from rewards helper', async () => {
            const indexerAmount0 = etherParse('1');
            await rewardsPool.connect(root).labor(deploymentId0, indexer0.address, indexerAmount0);
            await rewardsPool.connect(root).labor(deploymentId1, indexer0.address, indexerAmount0);
            await timeTravel(mockProvider, time.duration.days(1).toNumber());
            await rewardsHelper.batchCollectWithPool(indexer0.address, [deploymentId0, deploymentId1]);
        });
    });
});
