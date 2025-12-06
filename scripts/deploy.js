const hre = require("hardhat");

async function main() {
  console.log("Deploying Stake & Date contracts to Flare Coston2...");

  // FTSO Registry address on Coston2
  const FTSO_REGISTRY = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

  // Deploy SmartAccountFactory
  console.log("\n1. Deploying SmartAccountFactory...");
  const SmartAccountFactory = await hre.ethers.getContractFactory("SmartAccountFactory");
  const accountFactory = await SmartAccountFactory.deploy();
  await accountFactory.waitForDeployment();
  const accountFactoryAddress = await accountFactory.getAddress();
  console.log("SmartAccountFactory deployed to:", accountFactoryAddress);

  // Deploy GameMatch
  console.log("\n2. Deploying GameMatch...");
  const GameMatch = await hre.ethers.getContractFactory("GameMatch");
  const gameMatch = await GameMatch.deploy(FTSO_REGISTRY);
  await gameMatch.waitForDeployment();
  const gameMatchAddress = await gameMatch.getAddress();
  console.log("GameMatch deployed to:", gameMatchAddress);

  console.log("\n✅ Deployment complete!");
  console.log("\n📝 Contract Addresses:");
  console.log("SmartAccountFactory:", accountFactoryAddress);
  console.log("GameMatch:", gameMatchAddress);
  console.log("\n🔗 Add these to your frontend .env file");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
