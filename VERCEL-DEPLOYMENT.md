# 🚀 Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Environment Variables Setup

#### **Vercel Dashboard Environment Variables:**
Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables

Add these variables:
```
GOOGLE_CLIENT_ID=744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_REDIRECT_URI=https://theclayborngroup.com/api/auth/callback
```

### 2. Google Cloud Console Production Setup

#### **Add Production Redirect URI:**
Go to: https://console.cloud.google.com/ → APIs & Services → Credentials

Add this redirect URI:
```
https://theclayborngroup.com/api/auth/callback
```

### 3. Update Code for Production

#### **Update `/app/api/direct-auth/route.ts`:**
```typescript
const NGROK_URL = 'https://theclayborngroup.com';
const REDIRECT_URI = `${NGROK_URL}/api/auth/callback`;
```

#### **Update `/app/api/auth/callback/route.ts`:**
```typescript
const REDIRECT_URI = 'https://theclayborngroup.com/api/auth/callback';
```

#### **Update `/app/api/contact/route.ts`:**
```typescript
const REDIRECT_URI = 'https://theclayborngroup.com/api/auth/callback';
```

## 🚀 Deployment Steps

### Step 1: Connect to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
cd "C:\Users\DanClayborn\OneDrive - The Clayborn Group\clayborn-group-website"
vercel
```

### Step 2: Configure Project
- **Framework Preset:** Next.js
- **Root Directory:** ./
- **Build Command:** `npm run build` (or `next build`)
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Step 3: Set Environment Variables
Add the environment variables in Vercel dashboard (see above)

### Step 4: Deploy
```bash
vercel --prod
```

## 🔄 Post-Deployment Setup

### 1. Test OAuth2 Flow
Visit: `https://theclayborngroup.com/api/direct-auth`

### 2. Test Contact Form
Visit: `https://theclayborngroup.com/contact`

### 3. Verify Email Sending
Submit test form and check all three email inboxes

## 📧 Email Recipients
- gailsswalker@gmail.com
- anitabrinson2470@gmail.com
- dclayborn@visitingangels.com

## 🌐 Domain Setup
If using custom domain `theclayborngroup.com`:
1. Add domain in Vercel dashboard
2. Update DNS records as instructed by Vercel
3. Wait for SSL certificate (automatic)

## 🔧 Troubleshooting

### OAuth2 Issues:
- Check redirect URIs match exactly
- Verify environment variables in Vercel
- Wait 2-3 minutes for Google Cloud changes

### Build Issues:
- Clear Vercel cache: `vercel --prod --force`
- Check Next.js version compatibility
- Verify all imports are correct

### Email Issues:
- Verify OAuth2 tokens are stored
- Check Gmail API enabled
- Review server logs in Vercel

## 📊 Monitoring
- Vercel Analytics for traffic
- Vercel Logs for errors
- Google Cloud Console for API usage

## 🎯 Success Metrics
✅ Website loads at https://theclayborngroup.com
✅ All 7 pages work correctly
✅ Contact form submits successfully
✅ Professional emails sent to all recipients
✅ OAuth2 authorization works
✅ Mobile responsive design
✅ Fast loading times

## 🚀 Ready for Production!
Your tax preparation website is now enterprise-ready with professional email integration!
