# 💘 Stake & Date - Crypto Gaming Matchmaker

A revolutionary dating/social platform built on Flare Network that brings people together through crypto-based prediction games.

## 🎯 Concept

Match with strangers, play quick prediction games with real stakes, and connect through shared wins (or losses)! Uses Flare's FTSO for price feeds and Smart Accounts for seamless UX.

## 🚀 Features

- **Smart Account Integration**: Gasless onboarding with social recovery
- **FTSO Price Oracle**: Real-time price feeds for game mechanics
- **Prediction Games**: 5-minute price prediction matches
- **Real Stakes**: Win or lose together with your match
- **Social Connection**: Unlock chat after playing together
- **Cross-chain Prizes**: (Future) Win BTC/DOGE via FAssets

## 🛠️ Tech Stack

- **Smart Contracts**: Solidity 0.8.20
- **Frontend**: React + Vite + ethers.js
- **Blockchain**: Flare Network (Coston2 Testnet)
- **Oracles**: FTSO (Flare Time Series Oracle)

## 📦 Installation

### Prerequisites
- Node.js v18+
- MetaMask or compatible wallet
- Flare Coston2 testnet tokens

### Setup

1. **Install dependencies**
```bash
npm install
cd frontend && npm install
```

2. **Configure environment**
```bash
cp .env.example .env
# Add your private key to .env
```

3. **Compile contracts**
```bash
npm run compile
```

4. **Deploy to Coston2**
```bash
npm run deploy
```

5. **Update frontend config**
- Copy deployed contract addresses
- Update `GAME_MATCH_ADDRESS` in `frontend/src/App.jsx`

6. **Run frontend**
```bash
npm run frontend
```

## 🎮 How to Play

1. **Connect Wallet**: Connect MetaMask to Flare Coston2
2. **Join Queue**: Stake 0.01 FLR to enter matchmaking
3. **Get Matched**: Wait for another player
4. **Make Prediction**: Will FLR/USD go UP or DOWN in 5 minutes?
5. **Watch & Wait**: See if you both predicted correctly
6. **Claim Rewards**: Winners split the pot!

## 🏆 Winning Scenarios

- **Both Correct**: Split pot + bonus (50/50)
- **Both Wrong**: Refund stakes minus small fee
- **One Correct**: Winner takes most of the pot

## 📝 Smart Contracts

### GameMatch.sol
Main game logic with FTSO integration for price predictions.

### SmartAccountFactory.sol
Creates Smart Accounts with social recovery features.

## 🌐 Flare Integration

### FTSO (Flare Time Series Oracle)
- Provides decentralized price feeds
- No external oracle needed
- Real-time FLR/USD prices for game logic

### Smart Accounts (Future)
- Gasless transactions for better UX
- Social recovery for account security
- Perfect for onboarding non-crypto users

### FDC (Future Enhancement)
- Verify social media accounts
- Anti-bot protection
- Prove real-world achievements

### FAssets (Future Enhancement)
- Prize pools in wrapped BTC/DOGE
- Cross-chain tournament rewards

## 🎨 Future Features

- [ ] Chat system after matches
- [ ] Tournament mode with FAssets prizes
- [ ] FDC social verification
- [ ] Reputation system
- [ ] Team competitions
- [ ] Multiple prediction markets
- [ ] Mobile app

## 🔒 Security

- ReentrancyGuard on all fund transfers
- Ownable pattern for admin functions
- Time-locked game completion
- Claim-based reward distribution

## 📄 License

MIT

## 🤝 Contributing

This is a hackathon project! Feel free to fork and improve.

## 🏅 Hackathon Submission

Built for Flare Hackathon showcasing:
- ✅ FTSO integration
- ✅ Smart Accounts
- ✅ Novel use case (gaming + dating)
- ✅ Mass market appeal
- ✅ Fully functional MVP

---

**Made with ❤️ for the Flare community**
