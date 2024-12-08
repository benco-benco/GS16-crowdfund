const CrowdFunding = artifacts.require("CrowdFunding");

module.exports = async function (callback) {
    try {
        const instance = await CrowdFunding.deployed();

        // Create a campaign
        await instance.createCampaign(
            "0x108Dd58a309f979BF57B719FD4cd887b4beA7AdD", // Replace with a valid address
            "Test Campaign",
            "This is a test campaign",
            web3.utils.toWei("0.3", "ether"), // Goal of 0.3 Ether
            Math.floor(Date.now() / 1000) + 86400, // Deadline (24 hours from now)
            "https://example.com/image.jpg"
        );

        console.log("Campaign created successfully!");

        // Donate to the campaign
        await instance.donateToCampaign(0, {
            from: "0xA17a4299e6E675C894693B99587F30744b0cb4fE", // Replace with a valid address
            value: web3.utils.toWei("0.1", "ether"), // Donate 0.1 Ether
        });

        console.log("Donation made successfully!");

        callback();
    } catch (error) {
        console.error("Error occurred:", error);
        callback(error);
    }
};
