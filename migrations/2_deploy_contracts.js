const CrowdFunding = artifacts.require("CrowdFunding");

module.exports = async function (deployer) {
    // Deploy the contract
    await deployer.deploy(CrowdFunding);
};
