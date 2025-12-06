const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Stake & Date Setup...\n');

let allGood = true;

// Check .env file
console.log('1️⃣  Checking .env file...');
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('your_private_key_here')) {
    console.log('   ⚠️  WARNING: Private key not set in .env');
    console.log('   → Add your MetaMask private key to .env file');
    allGood = false;
  } else {
    console.log('   ✅ .env file configured');
  }
} else {
  console.log('   ❌ .env file not found');
  allGood = false;
}

// Check node_modules
console.log('\n2️⃣  Checking dependencies...');
if (fs.existsSync(path.join(__dirname, '../node_modules'))) {
  console.log('   ✅ Backend dependencies installed');
} else {
  console.log('   ❌ Backend dependencies missing');
  console.log('   → Run: npm install');
  allGood = false;
}

if (fs.existsSync(path.join(__dirname, '../frontend/node_modules'))) {
  console.log('   ✅ Frontend dependencies installed');
} else {
  console.log('   ❌ Frontend dependencies missing');
  console.log('   → Run: cd frontend && npm install');
  allGood = false;
}

// Check contracts compiled
console.log('\n3️⃣  Checking contracts...');
if (fs.existsSync(path.join(__dirname, '../artifacts'))) {
  console.log('   ✅ Contracts compiled');
} else {
  console.log('   ⚠️  Contracts not compiled yet');
  console.log('   → Run: npx hardhat compile');
}

// Check deployment
console.log('\n4️⃣  Checking deployment...');
const deploymentPath = path.join(__dirname, '../deployment.json');
if (fs.existsSync(deploymentPath)) {
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, 'utf8'));
  console.log('   ✅ Contracts deployed!');
  console.log('   → GameMatch:', deployment.contracts.GameMatch);
  console.log('   → SmartAccountFactory:', deployment.contracts.SmartAccountFactory);
} else {
  console.log('   ⚠️  Contracts not deployed yet');
  console.log('   → Run: npm run deploy');
}

// Check frontend .env
console.log('\n5️⃣  Checking frontend configuration...');
const frontendEnvPath = path.join(__dirname, '../frontend/.env');
if (fs.existsSync(frontendEnvPath)) {
  const frontendEnv = fs.readFileSync(frontendEnvPath, 'utf8');
  if (frontendEnv.includes('0x0000000000000000000000000000000000000000')) {
    console.log('   ⚠️  Frontend not configured');
    console.log('   → Deploy contracts first: npm run deploy');
  } else {
    console.log('   ✅ Frontend configured');
  }
} else {
  console.log('   ⚠️  Frontend .env not found');
  console.log('   → Will be created after deployment');
}

// Summary
console.log('\n' + '='.repeat(60));
if (allGood) {
  console.log('✅ Setup looks good!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Get test FLR: https://faucet.flare.network/');
  console.log('   2. Deploy: npm run deploy');
  console.log('   3. Run frontend: npm run frontend');
} else {
  console.log('⚠️  Some issues found. Please fix them and try again.');
}
console.log('='.repeat(60));
