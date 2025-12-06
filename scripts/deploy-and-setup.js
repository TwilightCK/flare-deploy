const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Starting deployment to Flare Coston2...\n");

  // FTSO Registry address on Coston2
  const FTSO_REGISTRY = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

  // Deploy SmartAccountFactory
  console.log("1️⃣  Deploying SmartAccountFactory...");
  const SmartAccountFactory = await hre.ethers.getContractFactory("SmartAccountFactory");
  const accountFactory = await SmartAccountFactory.deploy();
  await accountFactory.waitForDeployment();
  const accountFactoryAddress = await accountFactory.getAddress();
  console.log("✅ SmartAccountFactory deployed to:", accountFactoryAddress);

  // Deploy GameMatch
  console.log("\n2️⃣  Deploying GameMatch...");
  const GameMatch = await hre.ethers.getContractFactory("GameMatch");
  const gameMatch = await GameMatch.deploy(FTSO_REGISTRY);
  await gameMatch.waitForDeployment();
  const gameMatchAddress = await gameMatch.getAddress();
  console.log("✅ GameMatch deployed to:", gameMatchAddress);

  // Update frontend .env
  console.log("\n3️⃣  Updating frontend configuration...");
  const envContent = `VITE_GAME_MATCH_ADDRESS=${gameMatchAddress}
VITE_ACCOUNT_FACTORY_ADDRESS=${accountFactoryAddress}
VITE_CHAIN_ID=114
`;
  
  const envPath = path.join(__dirname, '../frontend/.env');
  fs.writeFileSync(envPath, envContent);
  console.log("✅ Frontend .env updated!");

  // Save deployment info
  const deploymentInfo = {
    network: "coston2",
    chainId: 114,
    timestamp: new Date().toISOString(),
    contracts: {
      GameMatch: gameMatchAddress,
      SmartAccountFactory: accountFactoryAddress
    }
  };

  const deploymentPath = path.join(__dirname, '../deployment.json');
  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));

  console.log("\n" + "=".repeat(60));
  console.log("🎉 DEPLOYMENT COMPLETE!");
  console.log("=".repeat(60));
  console.log("\n📝 Contract Addresses:");
  console.log("   GameMatch:", gameMatchAddress);
  console.log("   SmartAccountFactory:", accountFactoryAddress);
  console.log("\n🔗 View on Explorer:");
  console.log("   https://coston2-explorer.flare.network/address/" + gameMatchAddress);
  console.log("\n🚀 Next Steps:");
  console.log("   1. Run: cmd /c \"cd frontend && npm run dev\"");
  console.log("   2. Open: http://localhost:3000");
  console.log("   3. Connect your wallet and start playing!");
  console.log("\n" + "=".repeat(60));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Deployment failed:");
    console.error(error);
    process.exit(1);
  });
