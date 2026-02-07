# Vercel Deployment Script
Write-Host "🚀 Starting Vercel Deployment..." -ForegroundColor Green

# Clean node_modules and reinstall
Write-Host "🧹 Cleaning node_modules..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Install dependencies with legacy peer deps
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

# Deploy to Vercel production
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod --force

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "Your tax preparation website should be live!" -ForegroundColor Cyan
