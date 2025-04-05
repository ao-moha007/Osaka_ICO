require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  gasReporter: {
    enabled: true, // Enables gas reporting during tests
    currency: "USD", // Currency to report gas costs in (can be "ETH", "USD", etc.)
    gasPrice: 20, // Optional: Set the gas price in gwei (useful if you want to simulate different gas costs)
    //outputFile: "gas-report.txt", // Optional: Output the gas report to a file
    noColors: false, // Optional: Disable colors in the console output
    showTimeSpent: false, // Optional: Show time spent on each test
    //coinmarketcap: "YOUR_COINMARKETCAP_API_KEY", // Optional: Required if you want to report USD prices
  },
};
