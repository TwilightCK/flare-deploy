# 🚀 Deploy Stake & Date to Vercel

## ⚡ ONE-CLICK DEPLOY

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/stake-and-date&env=VITE_GAME_MATCH_ADDRESS,VITE_ACCOUNT_FACTORY_ADDRESS,VITE_CHAIN_ID&envDescription=Contract%20addresses%20on%20Flare%20Coston2&project-name=stake-and-date&repository-name=stake-and-date&root-directory=frontend)

---

## 📋 Quick Deploy Steps

### Option 1: Vercel CLI (2 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from frontend folder
cd frontend
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard (3 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Stake & Date - Flare Hackathon"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repo
   - Root Directory: `frontend`
   - Framework: Vite
   - Click Deploy

3. **Add Environment Variables** (in Vercel dashboard)
   ```
   VITE_GAME_MATCH_ADDRESS=0x88a5b08F441730b2D452d1F9642b63Cb6b09B251
   VITE_ACCOUNT_FACTORY_ADDRESS=0x5eE66faA4d6867076E4750e36fcF4B093060898B
   VITE_CHAIN_ID=114
   ```

---

## ✅ Your Deployed Contracts

Already live on Flare Coston2:

- **GameMatch:** `0x88a5b08F441730b2D452d1F9642b63Cb6b09B251`
- **SmartAccountFactory:** `0x5eE66faA4d6867076E4750e36fcF4B093060898B`

View on Explorer:
https://coston2-explorer.flare.network/address/0x88a5b08F441730b2D452d1F9642b63Cb6b09B251

---

## 🎯 After Deployment

Your app will be live at:
```
https://stake-and-date-xxx.vercel.app
```

### Test It:
1. Open your Vercel URL
2. Connect MetaMask
3. Switch to Coston2 testnet
4. Join queue and play!

### Share It:
- Perfect for hackathon demos
- Works on mobile
- Multiple users can test
- Professional presentation

---

## 🔧 Project Structure

```
stake-and-date/
├── frontend/              ← Deploy this folder
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── contracts/             ← Already deployed
├── scripts/
└── vercel.json           ← Vercel configuration
```

---

## 📱 Features

- ✅ Wallet connection (MetaMask)
- ✅ Network auto-switching to Coston2
- ✅ Real-time matchmaking
- ✅ FTSO price oracle integration
- ✅ Live gameplay
- ✅ Reward distribution
- ✅ Player statistics
- ✅ Responsive design

---

## 🎬 For Your Demo

**Show:**
- Live URL (professional!)
- Real blockchain transactions
- Multiple users playing
- Mobile responsive

**Highlight:**
- FTSO integration (decentralized oracle)
- Smart Accounts ready
- Novel use case (dating + gaming)
- Mass market appeal

---

## 🐛 Troubleshooting

**Build fails?**
- Check frontend/.env.production exists
- Verify contract addresses

**Can't connect wallet?**
- Check environment variables in Vercel
- Make sure MetaMask is on Coston2

**Blank page?**
- Check browser console
- Verify build output directory

---

## 🎉 You're Ready!

Your app is optimized for Vercel and ready to deploy!

**Next Steps:**
1. Choose deployment method (CLI or Dashboard)
2. Deploy in 2-3 minutes
3. Share your live URL
4. Win the hackathon! 🏆

---

**Questions?** Check DEPLOY_NOW.md or VERCEL_DEPLOYMENT.md for detailed guides.

Good luck! 🚀
