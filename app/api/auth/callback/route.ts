import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Temporarily hardcoded for testing - will fix env vars later
const CLIENT_ID = '744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
// Production URL - change to your domain
const REDIRECT_URI = 'https://theclayborngroup.com/api/auth/callback';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    if (error) {
        console.error('OAuth2 error:', error);
        return NextResponse.redirect('/contact?auth=error');
    }
    
    if (!code) {
        return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
    }
    
    try {
        const { tokens } = await new google.auth.OAuth2({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            redirectUri: REDIRECT_URI,
        }).getToken(code);
        
        // Store tokens (in production, use database)
        console.log('✅ OAuth2 tokens received:', {
            access_token: tokens.access_token ? 'present' : 'missing',
            refresh_token: tokens.refresh_token ? 'present' : 'missing',
            expiry_date: tokens.expiry_date ? new Date(tokens.expiry_date).toISOString() : 'missing'
        });
        
        // Store tokens in a global variable for this demo
        // In production, store in database with user ID
        (global as any).oauthTokens = tokens;
        
        // Redirect back to contact page with success
        return NextResponse.redirect('/contact?auth=success&message=' + encodeURIComponent('Gmail authorization successful!'));
        
    } catch (error) {
        console.error('❌ OAuth2 callback error:', error);
        return NextResponse.redirect('/contact?auth=error&message=' + encodeURIComponent('Authentication failed'));
    }
}
