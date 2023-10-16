// Copyright (C) 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.15;

enum ServiceStatus {
    TERMINATED,
    READY
}

enum ProjectType {
    SUBQUERY,
    RPC
}

struct ProjectInfo {
    bytes32 latestDeploymentId;
    ProjectType projectType;
}

struct DeploymentInfo {
    uint256 projectId;
    bytes32 metadata;
}

interface IProjectRegistry {

    function numberOfDeployments(address _address) external view returns (uint256);

    function isServiceAvailable(bytes32 deploymentId, address indexer) external view returns (bool);

    function createProject(string memory projectMetadataUri,bytes32 deploymentMetdata, bytes32 deploymentId, ProjectType projectType) external;

    function updateProjectMetadata(uint256 projectId, string memory metadataUri) external;

    function updateDeployment(
        uint256 projectId,
        bytes32 deploymentId,
        bytes32 metadata
    ) external;

    function startService(bytes32 deploymentId) external;

    function stopService(bytes32 deploymentId) external;
}