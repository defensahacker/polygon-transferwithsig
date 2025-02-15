require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.11",
  networks: {
    hardhat: {
      forking: {
        url: process.env.POLYGON_ALCHEMY_API_KEY,
        blockNumber: 22156659 // Upgrade to fix ecrecover was executed on block #22156660
      }
    }
  }
};
