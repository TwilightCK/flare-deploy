# 🚀 Deploy Instructions - Follow These Steps

## ✅ Vercel CLI is Installed!

Now you need to login and deploy. Follow these steps:

---

## Step 1: Login to Vercel

Open a new terminal/command prompt and run:

```bash
vercel login
```

This will:
1. Open your browser
2. Ask you to login with GitHub/GitLab/Email
3. Authorize the CLI

---

## Step 2: Deploy

After logging in, run:

```bash
cd frontend
vercel --prod
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? **[Your account]**
- Link to existing project? **N** (or Y if you already have one)
- Project name? **stake-and-date**
- Directory? **./  (just press Enter)**
- Override settings? **N**

---

## Step 3: Wait

Deployment takes about 30-60 seconds.

You'll see:
```
✅ Production: https://stake-and-date-xxx.vercel.app
```

---

## Step 4: Test

1. Open the URL
2. Hard refresh: `Ctrl+Shift+R`
3. Connect wallet
4. Join queue
5. Play!

---

## 🎯 Quick Commands

```bash
# Login (one time only)
vercel login

# Deploy
cd frontend
vercel --prod
```

---

## ⚡ Alternative: Use Vercel Dashboard

If CLI doesn't work:

1. Go to https://vercel.com/new
2. Import your project from GitHub
3. Set Root Directory to: `frontend`
4. Add environment variables:
   ```
   VITE_GAME_MATCH_ADDRESS=0xdb0CF217C36E637C518400142e681e9fFa622737e
   VITE_ACCOUNT_FACTORY_ADDRESS=0x25E5C1A149a21b20d1dF7808C0ec7d2925429448
   VITE_CHAIN_ID=114
   ```
5. Click Deploy

---

## 📝 After Deployment

Tell your friend to:
1. Hard refresh (Ctrl+Shift+R)
2. Reconnect wallet
3. Try again

---

**All fixes are ready! Just need to deploy!** 🚀
