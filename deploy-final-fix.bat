@echo off
cls
echo ╔══════════════════════════════════════════════════════════════╗
echo ║          FINAL FIX - Deploy to Vercel                        ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo ✅ ALL BUGS FIXED:
echo    - Prediction tracking works
echo    - Game starts automatically
echo    - Cancel/Exit feature added
echo    - Better error messages
echo.
echo 🚀 NEW CONTRACT:
echo    0xdb0CF217C36E637C518400142e681e9fFa622737e
echo.
echo ══════════════════════════════════════════════════════════════
echo.
pause
echo.
echo Deploying to Vercel...
echo.
cd frontend
call vercel --prod
echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                  DEPLOYMENT COMPLETE!                         ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo 📝 IMPORTANT: Tell your friend to:
echo.
echo    1. Hard refresh: Ctrl+Shift+R
echo    2. Reconnect wallet
echo    3. Try again!
echo.
echo ✅ NEW FEATURES:
echo    - Can cancel game anytime
echo    - Get refund when cancelling
echo    - Better status messages
echo.
echo ══════════════════════════════════════════════════════════════
echo.
pause
