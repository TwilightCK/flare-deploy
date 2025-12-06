const hre = require("hardhat");

async function main() {
  console.log("Deploying GameMatch with cancel feature...");

  const FTSO_REGISTRY = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

  const GameMatch = await hre.ethers.getContractFactory("GameMatch");
  const gameMatch = await GameMatch.deploy(FTSO_REGISTRY);
  await gameMatch.waitForDeployment();
  const gameMatchAddress = await gameMatch.getAddress();
  
  console.log("GameMatch deployed to:", gameMatchAddress);
  console.log("\nUpdate frontend/src/config.js with this address!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
