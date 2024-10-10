require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",  
  networks: {      //for using testnet or mainnet mentioning networks: {} is must hardhat, or other like mumbai polygon matic is required
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    sources: "./contracts", // default contract folder
    tests: "./test", // default test folder
    cache: "./cache", // default cache folder
    artifacts: "./artifacts", // default artifacts folder
  },
};
