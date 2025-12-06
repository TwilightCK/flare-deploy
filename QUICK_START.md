# ⚡ Quick Start - 5 Minutes to Demo

## Prerequisites
- MetaMask installed
- Node.js installed
- 5 minutes of your time

## 1. Get Test Tokens (1 min)
```
1. Go to: https://faucet.flare.network/
2. Select "Coston2 Testnet"
3. Paste your wallet address
4. Get free FLR
```

## 2. Setup Private Key (30 sec)
```bash
# Edit .env file
PRIVATE_KEY=your_metamask_private_key_here
```

## 3. Deploy (1 min)
```bash
cmd /c "npx hardhat run scripts/deploy.js --network coston2"
```

Copy the contract addresses from output!

## 4. Update Frontend (30 sec)
Edit `frontend/src/App.jsx` lines 6-7:
```javascript
const GAME_MATCH_ADDRESS = "0xYourGameMatchAddress"
const ACCOUNT_FACTORY_ADDRESS = "0xYourFactoryAddress"
```

## 5. Run (30 sec)
```bash
cmd /c "cd frontend && npm run dev"
```

## 6. Play! (2 min)
1. Open http://localhost:3000
2. Connect wallet
3. Join queue
4. Open incognito window
5. Connect second wallet
6. Join queue
7. Play the game!

## Done! 🎉

Now you have a working demo for the hackathon!
