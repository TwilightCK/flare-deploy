# 🔧 Fix Vercel Environment Variables

## ✅ QUICK FIX - Already Done!

I've updated `frontend/src/config.js` to use your deployed contract addresses as defaults. 

**Your app should work now!** Just redeploy:

```bash
cd frontend
vercel --prod
```

Or push to GitHub if using auto-deploy.

---

## 🎯 To Add Environment Variables in Vercel Dashboard

If you want to set them properly in Vercel:

1. **Go to your Vercel project**
   - Visit: https://vercel.com/dashboard
   - Click on your project

2. **Go to Settings**
   - Click "Settings" tab
   - Click "Environment Variables"

3. **Add these variables:**

   **Variable 1:**
   - Name: `VITE_GAME_MATCH_ADDRESS`
   - Value: `0x88a5b08F441730b2D452d1F9642b63Cb6b09B251`
   - Environment: Production, Preview, Development

   **Variable 2:**
   - Name: `VITE_ACCOUNT_FACTORY_ADDRESS`
   - Value: `0x5eE66faA4d6867076E4750e36fcF4B093060898B`
   - Environment: Production, Preview, Development

   **Variable 3:**
   - Name: `VITE_CHAIN_ID`
   - Value: `114`
   - Environment: Production, Preview, Development

4. **Redeploy**
   - Go to "Deployments" tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

## ✅ But You Don't Need To!

The contract addresses are now hardcoded in the config file, so your app will work immediately after redeploying!

---

## 🚀 Redeploy Now

**If using CLI:**
```bash
cd frontend
vercel --prod
```

**If using GitHub:**
```bash
git add .
git commit -m "Fix contract addresses"
git push
```

Vercel will auto-deploy!

---

## 🎉 Your App Will Work!

After redeploying, your app at:
```
https://flare-deploy-ochre.vercel.app
```

Will have the correct contract addresses and work perfectly!

---

## 🧪 Test It

1. Open your Vercel URL
2. Connect MetaMask
3. Switch to Coston2
4. Join queue
5. Play!

No more error! 🎊
