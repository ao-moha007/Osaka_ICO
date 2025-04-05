const hre = require("hardhat");

async function main() {
  // Get the contract factory for Spacebear
  const Token = await hre.ethers.getContractFactory("OsakaToken");

  console.log("Deploying OsakaToken contract...");
  // Define the initial supply for the token
  const initialSupply = ethers.BigNumber.from("9000000000000000000"); // Example value
  
  console.log("Deploying OsakaToken contract with initial supply:", initialSupply);
  // Deploy the contract
  const tokenInstance = await Token.deploy(initialSupply);
  console.log("Contract deployment initiated...");

  // Wait for the transaction to be mined
  if (tokenInstance.deployTransaction) {
    // Wait for the transaction to be mined
    const deployReceipt = await tokenInstance.deployTransaction.wait();
    console.log("Transaction mined successfully with hash:", deployReceipt.transactionHash);
  } else {
    console.error("Deployment transaction was not available.");
  }

  console.log("OsakaToken contract deployed to:", tokenInstance.address);
  console.log("OsakaToken contract name :", tokenInstance.name);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
