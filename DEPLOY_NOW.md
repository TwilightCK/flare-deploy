# 🚀 DEPLOY NOW - 2 Minutes to Live!

## ⚡ FASTEST METHOD - Vercel CLI

### Step 1: Install Vercel (30 seconds)
```bash
npm install -g vercel
```

### Step 2: Login (30 seconds)
```bash
vercel login
```
- Opens browser
- Click "Continue with GitHub" (or email)
- Authorize

### Step 3: Deploy (1 minute)
```bash
cd frontend
vercel
```

Answer the prompts:
```
? Set up and deploy? Y
? Which scope? [Your account]
? Link to existing project? N
? What's your project's name? stake-and-date
? In which directory is your code located? ./
? Want to override the settings? N
```

### Step 4: Production Deploy (30 seconds)
```bash
vercel --prod
```

**DONE! 🎉**

Your app is live at: `https://stake-and-date-xxx.vercel.app`

---

## 🎯 Alternative: GitHub + Vercel (3 Minutes)

### Step 1: Create GitHub Repo
1. Go to https://github.com/new
2. Name: `stake-and-date`
3. Click "Create repository"

### Step 2: Push Code
```bash
git init
git add .
git commit -m "Stake & Date - Flare Hackathon"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stake-and-date.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import" next to your repo
3. Configure:
   - **Root Directory:** `frontend`
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add Environment Variables:
   ```
   VITE_GAME_MATCH_ADDRESS=0x88a5b08F441730b2D452d1F9642b63Cb6b09B251
   VITE_ACCOUNT_FACTORY_ADDRESS=0x5eE66faA4d6867076E4750e36fcF4B093060898B
   VITE_CHAIN_ID=114
   ```
5. Click "Deploy"

**DONE! 🎉**

---

## ✅ After Deployment

### Your Live URLs:
- **App:** https://your-app.vercel.app
- **Contracts:** https://coston2-explorer.flare.network/address/0x88a5b08F441730b2D452d1F9642b63Cb6b09B251

### Test It:
1. Open your Vercel URL
2. Connect MetaMask
3. Switch to Coston2
4. Play!

### Share It:
- Send URL to judges
- Test on mobile
- Share with team
- Demo from anywhere!

---

## 🎬 For Your Demo

**Show this:**
1. Live URL (professional!)
2. Works on any device
3. Real blockchain transactions
4. Multiple users can play

**Not this:**
- ❌ localhost (looks unfinished)
- ❌ "it works on my machine"

---

## 🔥 Pro Tips

1. **Custom Domain** (optional)
   - Go to Vercel dashboard
   - Add custom domain
   - Looks more professional

2. **Analytics** (free)
   - Vercel shows visitor stats
   - See how many people tried it

3. **Instant Updates**
   - Push to GitHub
   - Auto-deploys
   - No manual work

---

## 🎯 Ready to Deploy?

**Choose your method:**

**Fast (CLI):**
```bash
npm install -g vercel
cd frontend
vercel login
vercel
vercel --prod
```

**Easy (GitHub):**
1. Push to GitHub
2. Import to Vercel
3. Add env vars
4. Deploy

---

**Either way, you'll be live in 2-3 minutes!** 🚀

**Your contracts are already deployed:**
- ✅ GameMatch: 0x88a5b08F441730b2D452d1F9642b63Cb6b09B251
- ✅ SmartAccountFactory: 0x5eE66faA4d6867076E4750e36fcF4B093060898B

**Just deploy the frontend and you're done!** 🎉
