@echo off
echo ========================================
echo   Fixing and Deploying Updated Contracts
echo ========================================
echo.
echo Your opponent is seeing errors because
echo they're using the old contract addresses.
echo.
echo This will deploy the FIXED contracts to Vercel.
echo.
echo New Contract Addresses:
echo GameMatch: 0x6D15BEd26b3b80AC2E43Aca4c31608607ae20C14
echo SmartAccountFactory: 0x25E5C1A149a21b20d1dF7808C0ec7d2925429448
echo.
pause
echo.
echo Deploying to Vercel...
cd frontend
call vercel --prod
echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo IMPORTANT: Tell your opponent to:
echo 1. Hard refresh the page (Ctrl+Shift+R)
echo 2. Reconnect their wallet
echo 3. Try again
echo.
echo The error should be fixed now!
echo.
pause
