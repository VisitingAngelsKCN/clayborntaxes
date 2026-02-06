#!/bin/bash

# 🚀 Vercel Deployment Script for The Clayborn Group

echo "🚀 Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel login..."
vercel whoami || vercel login

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your website is now live at: https://theclayborngroup.com"
echo "📧 Don't forget to:"
echo "   1. Set environment variables in Vercel dashboard"
echo "   2. Add production redirect URI to Google Cloud Console"
echo "   3. Test the OAuth2 flow and contact form"
