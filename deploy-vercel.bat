@echo off
echo ========================================
echo   Deploying Stake ^& Date to Vercel
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel
echo.

echo Step 2: Logging in to Vercel...
call vercel login
echo.

echo Step 3: Deploying to Vercel...
cd frontend
call vercel
echo.

echo Step 4: Deploying to Production...
call vercel --prod
echo.

echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your app is now live!
echo Check the URL above to access it.
echo.
pause
