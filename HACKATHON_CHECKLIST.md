# ✅ Hackathon Checklist - Stake & Date

## 🎯 Pre-Demo Setup (Do This First!)

### Environment Setup
- [ ] Node.js installed
- [ ] MetaMask installed
- [ ] Git installed (optional)

### Get Test Tokens
- [ ] Go to https://faucet.flare.network/
- [ ] Select "Coston2 Testnet"
- [ ] Request FLR for Wallet 1
- [ ] Request FLR for Wallet 2 (for testing)
- [ ] Confirm tokens received (check MetaMask)

### Configure Project
- [ ] Open `.env` file
- [ ] Add your private key (from MetaMask)
- [ ] Save the file
- [ ] Run `cmd /c "npm run check"` to verify

### Deploy Contracts
- [ ] Run `cmd /c "npm run deploy"`
- [ ] Wait for deployment to complete
- [ ] Copy contract addresses (shown in console)
- [ ] Verify `frontend/.env` was auto-created
- [ ] Check deployment.json was created

### Test Locally
- [ ] Run `cmd /c "npm run frontend"`
- [ ] Open http://localhost:3000
- [ ] Connect Wallet 1
- [ ] Join queue
- [ ] Open incognito/another browser
- [ ] Connect Wallet 2
- [ ] Join queue
- [ ] Verify match created
- [ ] Both make predictions
- [ ] Verify game works end-to-end

## 🎤 Presentation Prep

### Materials Ready
- [ ] Laptop charged
- [ ] Internet connection tested
- [ ] MetaMask configured
- [ ] App running locally
- [ ] Backup: Screen recording of demo
- [ ] Backup: Screenshots of key features

### Presentation Slides
- [ ] Title slide (Stake & Date)
- [ ] Problem slide (boring dating apps + crypto barriers)
- [ ] Solution slide (gaming matchmaker)
- [ ] How it works (5 steps)
- [ ] Flare integration (FTSO, Smart Accounts, FDC, FAssets)
- [ ] Market opportunity
- [ ] Roadmap
- [ ] Why we'll win

### Demo Script Practiced
- [ ] Introduction (30 sec)
- [ ] Connect wallet (30 sec)
- [ ] Join queue (30 sec)
- [ ] Match creation (30 sec)
- [ ] Make predictions (30 sec)
- [ ] Show game active (30 sec)
- [ ] Explain FTSO integration (30 sec)
- [ ] Show results/rewards (30 sec)
- [ ] Wrap up (30 sec)

### Q&A Prep
- [ ] How do you prevent bots? (FDC verification)
- [ ] What if price doesn't change? (Even 0.01% counts)
- [ ] How do you make money? (5% platform fee)
- [ ] Why Flare? (FTSO, Smart Accounts, FDC, FAssets)
- [ ] What about gas fees? (Very cheap on Flare)
- [ ] How is this different? (Social-first, not just gambling)
- [ ] Regulation concerns? (Gaming platform, not gambling)
- [ ] Can it scale? (Yes, efficient contracts)

## 🎬 Day of Hackathon

### Morning Setup (2 hours before)
- [ ] Arrive early
- [ ] Find power outlet
- [ ] Connect to WiFi
- [ ] Test internet connection
- [ ] Open all necessary tabs
- [ ] Run app locally
- [ ] Test with 2 wallets
- [ ] Verify everything works

### 30 Minutes Before
- [ ] Close unnecessary apps
- [ ] Clear browser cache
- [ ] Restart app
- [ ] Test one more time
- [ ] Have backup plan ready
- [ ] Deep breath, you got this!

### During Presentation
- [ ] Smile and be enthusiastic
- [ ] Speak clearly and confidently
- [ ] Show passion for the project
- [ ] Make eye contact with judges
- [ ] Handle questions gracefully
- [ ] Thank judges at the end

### After Presentation
- [ ] Share GitHub repo link
- [ ] Provide testnet contract addresses
- [ ] Offer to answer more questions
- [ ] Network with other participants
- [ ] Get feedback from judges

## 📊 Technical Checklist

### Smart Contracts
- [x] GameMatch.sol implemented
- [x] SmartAccountFactory.sol implemented
- [x] FTSO integration working
- [x] ReentrancyGuard for security
- [x] Ownable pattern for admin
- [x] Events for all actions
- [x] Compiled successfully
- [ ] Deployed to Coston2
- [ ] Verified on explorer (optional)

### Frontend
- [x] React app built
- [x] Wallet connection working
- [x] Network switching implemented
- [x] GameRoom component
- [x] MatchQueue component
- [x] PlayerStats component
- [x] Responsive design
- [x] Error handling
- [ ] Tested with real wallets

### Flare Features
- [x] FTSO integration (price feeds)
- [x] Smart Accounts (factory ready)
- [x] FDC planned (documented)
- [x] FAssets planned (documented)

### Documentation
- [x] README.md
- [x] QUICK_START.md
- [x] SETUP_GUIDE.md
- [x] HACKATHON_DEMO.md
- [x] Code comments
- [x] Clear variable names

## 🏆 Judging Criteria

### Innovation (25%)
- [x] Novel use case (dating + gaming)
- [x] Unique approach to social connection
- [x] Creative use of blockchain

### Technical Implementation (25%)
- [x] Clean, well-structured code
- [x] Proper use of Flare features
- [x] Security best practices
- [x] Efficient gas usage

### User Experience (25%)
- [x] Beautiful, intuitive UI
- [x] Easy onboarding
- [x] Responsive design
- [x] Clear feedback to users

### Potential Impact (25%)
- [x] Large market opportunity
- [x] Real utility
- [x] Scalable solution
- [x] Clear roadmap

## 🎯 Success Metrics

### Must Have
- [ ] App deployed and working
- [ ] Live demo successful
- [ ] All Flare features showcased
- [ ] Judges impressed

### Nice to Have
- [ ] Multiple test users
- [ ] Video demo backup
- [ ] GitHub stars
- [ ] Social media buzz

### Dream Outcome
- [ ] First place! 🥇
- [ ] Judges love it
- [ ] Other teams impressed
- [ ] Potential investors interested

## 📝 Final Notes

**Remember:**
- You've built something amazing
- The code is solid
- The idea is unique
- You're prepared
- Have fun!

**If something goes wrong:**
- Stay calm
- Use backup screen recording
- Explain what should happen
- Judges understand tech demos can be tricky

**Most Important:**
- Show passion
- Be yourself
- Enjoy the experience
- Learn from feedback

---

**Good luck! You've got this! 🚀**

**Last check before demo:**
```bash
cmd /c "npm run check"
```

**Start the app:**
```bash
cmd /c "npm run frontend"
```

**You're ready to win! 🏆**
