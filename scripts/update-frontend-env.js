const fs = require('fs');
const path = require('path');

// Get contract addresses from command line arguments
const gameMatchAddress = process.argv[2];
const accountFactoryAddress = process.argv[3];

if (!gameMatchAddress || !accountFactoryAddress) {
  console.error('Usage: node update-frontend-env.js <GameMatchAddress> <AccountFactoryAddress>');
  process.exit(1);
}

const envContent = `VITE_GAME_MATCH_ADDRESS=${gameMatchAddress}
VITE_ACCOUNT_FACTORY_ADDRESS=${accountFactoryAddress}
VITE_CHAIN_ID=114
`;

const envPath = path.join(__dirname, '../frontend/.env');
fs.writeFileSync(envPath, envContent);

console.log('✅ Frontend .env updated successfully!');
console.log('\nContract Addresses:');
console.log('GameMatch:', gameMatchAddress);
console.log('AccountFactory:', accountFactoryAddress);
console.log('\n🚀 Now run: cmd /c "cd frontend && npm run dev"');
