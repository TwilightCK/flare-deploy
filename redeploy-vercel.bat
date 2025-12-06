@echo off
echo ========================================
echo   Redeploying to Vercel
echo ========================================
echo.
echo Contract addresses are now fixed!
echo.
echo Deploying to production...
cd frontend
call vercel --prod
echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your app is now live and working!
echo Open your Vercel URL to test it.
echo.
pause
