require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/hffFdENhQ3VfRuRVTjqHBIJlc6SYIOFV",
      accounts: ["f7d73eed20fa64c8426b7bcd7eca1554c3d52bba2494333eaf0c3710af50736f"]
    },
  },
};