// Copyright (C) 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0-or-later

import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Airdropper, ERC20 } from '../src';
import { ZERO_ADDRESS } from './constants';
import { etherParse, futureTimestamp, lastestBlockTime, timeTravel } from './helper';
import { deployContracts } from './setup';

describe('Airdropper Contract', () => {
    let wallet_0, wallet_1, wallet_2, wallet_3;
    let airdropper: Airdropper;
    let token: ERC20;
    let sqtAddress;

    beforeEach(async () => {
        [wallet_0, wallet_1, wallet_2, wallet_3] = await ethers.getSigners();
        const deployment = await deployContracts(wallet_0, wallet_1);
        airdropper = deployment.airdropper;
        token = deployment.token;
        sqtAddress = token.address;
    });

    describe('init states check', () => {
        it('init nextRoundId should be 0', async () => {
            expect(await airdropper.nextRoundId()).to.equal(0);
        });
        it('init settleDestination should be 0x00', async () => {
            expect(await airdropper.settleDestination()).to.equal(ZERO_ADDRESS);
        });
        it('owner account set to be controller', async () => {
            expect(await airdropper.controllers(wallet_0.address)).to.equal(true);
        });
    });

    describe('config contract', () => {
        it('set settleDestination should work', async () => {
            await airdropper.setSettleDestination(wallet_3.address);
            expect(await airdropper.settleDestination()).to.equal(wallet_3.address);
        });
        it('add controller account should work', async () => {
            expect(await airdropper.controllers(wallet_1.address)).to.equal(false);
            await airdropper.addController(wallet_1.address);
            expect(await airdropper.controllers(wallet_1.address)).to.equal(true);
        });
        it('remove controller account should work', async () => {
            await airdropper.addController(wallet_1.address);
            expect(await airdropper.controllers(wallet_1.address)).to.equal(true);
            await airdropper.removeController(wallet_1.address);
            expect(await airdropper.controllers(wallet_1.address)).to.equal(false);
        });
    });

    describe('round test', () => {
        let startTime: number;
        let endTime: number;

        beforeEach(async () => {
            startTime = (await lastestBlockTime()) + 3600;
            endTime = await futureTimestamp(60 * 60 * 24 * 3);
        });

        it('create round should work', async () => {
            await expect(airdropper.createRound(sqtAddress, startTime, endTime))
                .to.be.emit(airdropper, 'RoundCreated')
                .withArgs(0, sqtAddress, startTime, endTime);

            const round = await airdropper.roundRecord(0);
            expect(round.tokenAddress).to.equal(sqtAddress);
            expect(round.roundStartTime).to.equal(startTime);
            expect(round.roundDeadline).to.equal(endTime);
            expect(round.unclaimedAmount).to.equal(etherParse('0'));
            expect(await airdropper.nextRoundId()).to.equal(1);
        });

        it('create round with invaild parameter should fail', async () => {
            await expect(airdropper.createRound(ZERO_ADDRESS, startTime, endTime)).to.be.revertedWith('G009');
            await expect(airdropper.createRound(sqtAddress, 100, endTime)).to.be.revertedWith('A001');
            await expect(
                airdropper.createRound(
                    sqtAddress,
                    (await lastestBlockTime()) + 60 * 60 * 2,
                    (await lastestBlockTime()) + 60 * 60
                )
            ).to.be.revertedWith('A001');
        });
        it('create round with invaild caller should fail', async () => {
            await expect(airdropper.connect(wallet_1).createRound(sqtAddress, startTime, endTime)).to.be.revertedWith(
                'A010'
            );
        });
        it('update round should work', async () => {
            await airdropper.createRound(sqtAddress, startTime, endTime);
            const [updatedStartTime, updatedEndTime] = [startTime + 1000, endTime - 1000];
            await expect(airdropper.updateRound(0, updatedStartTime, updatedEndTime))
                .to.be.emit(airdropper, 'RoundUpdated')
                .withArgs(0, updatedStartTime, updatedEndTime);

            const round = await airdropper.roundRecord(0);
            expect(round.roundStartTime).to.be.eq(updatedStartTime);
            expect(round.roundDeadline).to.be.eq(updatedEndTime);
        });
        it('update round with invaild caller should fail', async () => {
            await expect(airdropper.connect(wallet_1).updateRound(0, startTime, endTime)).to.be.revertedWith('A010');
        });
        it.only('update round with invalid param should fail', async () => {
            await airdropper.createRound(sqtAddress, startTime, endTime);
            const blockTime = await lastestBlockTime();
            // invalid round id;
            await expect(airdropper.updateRound(1, startTime, endTime)).to.be.revertedWith('A011');
            // invalid start time
            await expect(airdropper.updateRound(0, blockTime - 1, endTime)).to.be.revertedWith('A001');
            // invalid end time
            await expect(airdropper.updateRound(0, startTime + 1000, startTime)).to.be.revertedWith('A001');
            await timeTravel(60 * 60 * 24 * 3);
            // round expired
            await expect(airdropper.updateRound(0, startTime + 1000, endTime + 1000)).to.be.revertedWith('A011');
        });
    });

    describe('airdrop test', () => {
        beforeEach(async () => {
            //roundId 0: expire
            await airdropper.createRound(
                sqtAddress,
                await futureTimestamp(60 * 60 * 2),
                await futureTimestamp(60 * 60 * 24 * 2)
            );
            //roundId 1: ongoing
            await airdropper.createRound(
                sqtAddress,
                await futureTimestamp(60 * 60 * 3),
                await futureTimestamp(60 * 60 * 24 * 5)
            );

            await token.increaseAllowance(airdropper.address, etherParse('100'));
        });
        it('batch airdrop should work', async () => {
            await expect(
                airdropper.batchAirdrop(
                    [wallet_1.address, wallet_2.address],
                    [1, 1],
                    [etherParse('10'), etherParse('20')]
                )
            )
                .to.be.emit(airdropper, 'AddAirdrop')
                .withArgs(wallet_1.address, 1, etherParse('10'));

            expect(await airdropper.airdropRecord(wallet_1.address, 1)).to.be.eq(etherParse('10'));
            expect(await airdropper.airdropRecord(wallet_2.address, 1)).to.be.eq(etherParse('20'));
            expect(await (await airdropper.roundRecord(1)).unclaimedAmount).to.be.eq(etherParse('30'));
            expect(await token.balanceOf(airdropper.address)).to.be.eq(etherParse('30'));
        });
        it('batch airdrop with invaild caller should fail', async () => {
            await expect(
                airdropper
                    .connect(wallet_1)
                    .batchAirdrop([wallet_1.address, wallet_2.address], [1, 1], [etherParse('10'), etherParse('20')])
            ).to.be.revertedWith('A010');
        });
        it('duplicate airdrop should fail', async () => {
            await airdropper.batchAirdrop([wallet_1.address], [1], [etherParse('10')]);
            await expect(airdropper.batchAirdrop([wallet_1.address], [1], [etherParse('20')])).to.be.revertedWith(
                'A003'
            );
        });
        it('airdrop invaild round should fail', async () => {
            await timeTravel(60 * 60 * 2);
            await expect(airdropper.batchAirdrop([wallet_1.address], [0], [etherParse('10')])).to.be.revertedWith(
                'A002'
            );
        });
        it('airdrop 0 amount should fail', async () => {
            await expect(airdropper.batchAirdrop([wallet_1.address], [1], [etherParse('0')])).to.be.revertedWith(
                'A004'
            );
        });
        it('settle airdrop round should work', async () => {
            await airdropper.setSettleDestination(wallet_3.address);
            await airdropper.batchAirdrop([wallet_1.address], [0], [etherParse('10')]);

            await expect(airdropper.settleEndedRound(0)).to.be.revertedWith('A008');

            await timeTravel(60 * 60 * 24 * 3);
            await expect(airdropper.settleEndedRound(0))
                .to.be.emit(airdropper, 'RoundSettled')
                .withArgs(0, wallet_3.address, etherParse('10'));
            await expect(airdropper.settleEndedRound(0)).to.be.revertedWith('A009');

            expect(await token.balanceOf(airdropper.address)).to.be.eq(etherParse('0'));
            expect(await token.balanceOf(wallet_3.address)).to.be.eq(etherParse('10'));
        });
    });

    describe('claim airdrop test', () => {
        beforeEach(async () => {
            await token.increaseAllowance(airdropper.address, etherParse('100'));
            await airdropper.createRound(
                sqtAddress,
                await futureTimestamp(60 * 60 * 2),
                await futureTimestamp(60 * 60 * 24 * 2)
            );
            await airdropper.createRound(
                sqtAddress,
                await futureTimestamp(60 * 60 * 2),
                await futureTimestamp(60 * 60 * 24 * 2)
            );
            await airdropper.batchAirdrop(
                [wallet_1.address, wallet_1.address],
                [0, 1],
                [etherParse('10'), etherParse('20')]
            );
        });
        it('claim airdrop should work', async () => {
            await timeTravel(60 * 60 * 3);

            await expect(airdropper.connect(wallet_1).claimAirdrop(0))
                .to.be.emit(airdropper, 'AirdropClaimed')
                .withArgs(wallet_1.address, 0, etherParse('10'));

            expect(await airdropper.airdropRecord(wallet_1.address, 0)).to.be.eq(etherParse('0'));
            expect(await (await airdropper.roundRecord(0)).unclaimedAmount).to.be.eq(etherParse('0'));
            expect(await token.balanceOf(airdropper.address)).to.be.eq(etherParse('20'));
            expect(await token.balanceOf(wallet_1.address)).to.be.eq(etherParse('10'));
        });
        it('batch claim airdrop should work', async () => {
            await timeTravel(60 * 60 * 3);

            await expect(airdropper.connect(wallet_1).batchClaimAirdrop([0, 1]))
                .to.be.emit(airdropper, 'AirdropClaimed')
                .withArgs(wallet_1.address, 0, etherParse('10'));

            expect(await airdropper.airdropRecord(wallet_1.address, 0)).to.be.eq(etherParse('0'));
            expect(await (await airdropper.roundRecord(0)).unclaimedAmount).to.be.eq(etherParse('0'));
            expect(await token.balanceOf(airdropper.address)).to.be.eq(etherParse('0'));
            expect(await token.balanceOf(wallet_1.address)).to.be.eq(etherParse('30'));
        });
        it('claim 0 airdrop should fail', async () => {
            await timeTravel(60 * 60 * 3);
            await airdropper.connect(wallet_1).claimAirdrop(0);
            await expect(airdropper.connect(wallet_1).claimAirdrop(0)).to.be.revertedWith('A006');
        });
        it('claim invaild round should fail', async () => {
            await expect(airdropper.connect(wallet_1).claimAirdrop(0)).to.be.revertedWith('A005');
            await timeTravel(60 * 60 * 24 * 3);
            await expect(airdropper.connect(wallet_1).claimAirdrop(0)).to.be.revertedWith('A005');
        });
    });
});
