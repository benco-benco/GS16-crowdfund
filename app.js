const CrowdFunding = artifacts.require("CrowdFunding");

module.exports = async function (callback) {
    try {
        const instance = await CrowdFunding.deployed();

        // Create two campaigns
        await instance.createCampaign(
            "0x108Dd58a309f979BF57B719FD4cd887b4beA7AdD", // Replace with a valid Ganache address
            "First Campaign",
            "Description for the first campaign",
            1000,
            Math.floor(Date.now() / 1000) + 86400, // 24 hours from now
            "image1_url"
        );

        await instance.createCampaign(
            "0xDB63872D14eF2cbDce97A7b3d71bd6cD7Fe780E5", // Replace with another address
            "Second Campaign",
            "Description for the second campaign",
            2000,
            Math.floor(Date.now() / 1000) + 172800, // 48 hours from now
            "image2_url"
        );

        // Retrieve and display all campaigns
        const campaigns = await instance.getCampaigns();
        campaigns.forEach((campaign, index) => {
            console.log(`Campaign ${index + 1}:`);
            console.log(`  Owner: ${campaign.owner}`);
            console.log(`  Title: ${campaign.title}`);
            console.log(`  Description: ${campaign.description}`);
            console.log(`  Target: ${campaign.target}`);
            console.log(`  Deadline: ${new Date(campaign.deadline * 1000).toLocaleString()}`);
            console.log(`  Amount Collected: ${campaign.amountCollected}`);
            console.log(`  Image: ${campaign.image}`);
            console.log('-----------------------------');
        });

        callback();
    } catch (error) {
        console.error("Error executing script:", error);
        callback(error);
    }
};
