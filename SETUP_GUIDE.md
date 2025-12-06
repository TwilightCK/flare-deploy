# 🚀 Complete Setup Guide - Stake & Date

## Step 1: Get Testnet Tokens

1. Go to **Flare Faucet**: https://faucet.flare.network/
2. Select **"Coston2 Testnet"**
3. Enter your MetaMask wallet address
4. Click "Request" to get free test FLR tokens
5. Wait 30 seconds for tokens to arrive

## Step 2: Configure Your Wallet

### Get Your Private Key from MetaMask:
1. Open MetaMask
2. Click the 3 dots menu
3. Go to "Account Details"
4. Click "Show Private Key"
5. Enter your password
6. Copy the private key

### Add to .env file:
1. Open `.env` file in the project root
2. Replace `your_private_key_here` with your actual private key
3. Save the file

**Example:**
```
PRIVATE_KEY=abc123def456...your_actual_key
FTSO_REGISTRY_ADDRESS=0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019
```

## Step 3: Add Coston2 Network to MetaMask

1. Open MetaMask
2. Click network dropdown (top)
3. Click "Add Network" → "Add a network manually"
4. Enter these details:

```
Network Name: Flare Coston2 Testnet
RPC URL: https://coston2-api.flare.network/ext/C/rpc
Chain ID: 114
Currency Symbol: C2FLR
Block Explorer: https://coston2-explorer.flare.network/
```

5. Click "Save"
6. Switch to Coston2 network

## Step 4: Deploy Contracts

Run this command:
```bash
cmd /c "npx hardhat run scripts/deploy.js --network coston2"
```

You'll see output like:
```
SmartAccountFactory deployed to: 0xABC123...
GameMatch deployed to: 0xDEF456...
```

**COPY THESE ADDRESSES!** You'll need them next.

## Step 5: Update Frontend Config

1. Open `frontend/src/App.jsx`
2. Find lines 6-7:
```javascript
const GAME_MATCH_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE"
const ACCOUNT_FACTORY_ADDRESS = "YOUR_FACTORY_ADDRESS_HERE"
```

3. Replace with your deployed addresses:
```javascript
const GAME_MATCH_ADDRESS = "0xDEF456..." // Your GameMatch address
const ACCOUNT_FACTORY_ADDRESS = "0xABC123..." // Your Factory address
```

4. Save the file

## Step 6: Create Frontend .env

1. Go to `frontend` folder
2. Create a `.env` file
3. Add:
```
VITE_GAME_MATCH_ADDRESS=0xDEF456...
VITE_ACCOUNT_FACTORY_ADDRESS=0xABC123...
VITE_CHAIN_ID=114
```

## Step 7: Run the App

```bash
cmd /c "cd frontend && npm run dev"
```

The app will open at: **http://localhost:3000**

## Step 8: Test the App

1. Open http://localhost:3000 in your browser
2. Click "Connect Wallet"
3. Approve MetaMask connection
4. Make sure you're on Coston2 network
5. Click "Join Queue" (costs 0.01 test FLR)
6. Open another browser/incognito window
7. Connect with a different wallet
8. Join queue from second wallet
9. You'll be matched!
10. Both players make predictions (UP or DOWN)
11. Wait 5 minutes
12. Claim rewards!

## Troubleshooting

### "Insufficient funds"
- Get more test FLR from the faucet

### "Wrong network"
- Switch MetaMask to Coston2 network

### "Transaction failed"
- Check you have enough FLR for gas
- Try increasing gas limit in MetaMask

### "Contract not found"
- Make sure you updated the contract addresses in App.jsx
- Verify contracts deployed successfully

## Demo Video Script

1. **Intro**: "This is Stake & Date - a crypto gaming matchmaker"
2. **Connect**: Show wallet connection
3. **Stats**: Show player stats dashboard
4. **Queue**: Click join queue, show waiting
5. **Match**: Show match creation (use 2 browsers)
6. **Predict**: Both players make predictions
7. **Wait**: Show countdown timer
8. **Win**: Show rewards claim
9. **Outro**: "Built on Flare with FTSO and Smart Accounts"

## Hackathon Presentation Tips

1. **Start with the problem**: Dating apps are boring, crypto is intimidating
2. **Show the solution**: Fun games + real stakes = connection
3. **Live demo**: Actually play a game live
4. **Tech highlights**: 
   - FTSO for decentralized price feeds
   - Smart Accounts for gasless UX
   - Future: FDC for verification, FAssets for prizes
5. **Market potential**: Gaming + dating = billions of users

## Next Steps After Hackathon

- [ ] Add chat functionality
- [ ] Implement FDC social verification
- [ ] Add FAssets prize pools
- [ ] Create mobile app
- [ ] Add more game types
- [ ] Tournament mode
- [ ] Reputation system

Good luck! 🚀
