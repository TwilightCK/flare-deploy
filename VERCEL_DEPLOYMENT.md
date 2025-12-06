# 🚀 Deploy to Vercel - Stake & Date

## Quick Deploy (2 Minutes)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- Project name? **stake-and-date** (or your choice)
- Directory? **./frontend**
- Override settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

---

### Method 2: Vercel Dashboard (Easiest)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Stake & Date"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to Vercel**
   - Visit: https://vercel.com/
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   VITE_GAME_MATCH_ADDRESS=0x88a5b08F441730b2D452d1F9642b63Cb6b09B251
   VITE_ACCOUNT_FACTORY_ADDRESS=0x5eE66faA4d6867076E4750e36fcF4B093060898B
   VITE_CHAIN_ID=114
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your app will be live!

---

## 🎯 After Deployment

Your app will be available at:
```
https://stake-and-date.vercel.app
```
(or your custom domain)

### Test Your Deployment

1. Open the Vercel URL
2. Connect MetaMask
3. Switch to Coston2 testnet
4. Join queue and play!

---

## 🔧 Update Deployment

If you make changes:

**Using CLI:**
```bash
vercel --prod
```

**Using GitHub:**
- Just push to main branch
- Vercel auto-deploys

---

## 📱 Share Your Demo

Once deployed, share:
- **Live App:** https://your-app.vercel.app
- **Contracts:** https://coston2-explorer.flare.network/address/0x88a5b08F441730b2D452d1F9642b63Cb6b09B251
- **GitHub:** Your repo URL

---

## 🎬 For Hackathon Demo

1. **Show live URL** (not localhost)
2. **Multiple people can test** simultaneously
3. **Works on mobile** too
4. **Professional presentation**

---

## ⚡ Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## 🐛 Troubleshooting

**Build fails?**
- Check that frontend/.env.production exists
- Verify contract addresses are correct

**App loads but can't connect?**
- Check environment variables in Vercel dashboard
- Make sure MetaMask is on Coston2

**Blank page?**
- Check browser console for errors
- Verify build output directory is correct

---

## 🎉 You're Ready!

Your app is now deployed and accessible from anywhere!

Perfect for:
- ✅ Hackathon demos
- ✅ Testing with judges
- ✅ Sharing with team
- ✅ Mobile testing
- ✅ Professional presentation

Good luck! 🚀
