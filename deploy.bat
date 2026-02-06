@echo off
echo 🚀 Starting deployment to Vercel...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
)

REM Login to Vercel (if not already logged in)
echo 🔐 Checking Vercel login...
vercel whoami >nul 2>&1
if %errorlevel% neq 0 (
    vercel login
)

REM Deploy to production
echo 🚀 Deploying to production...
vercel --prod

echo ✅ Deployment complete!
echo 🌐 Your website is now live at: https://theclayborngroup.com
echo 📧 Don't forget to:
echo    1. Set environment variables in Vercel dashboard
echo    2. Add production redirect URI to Google Cloud Console  
echo    3. Test the OAuth2 flow and contact form
pause
