import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const CLIENT_ID = '744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com';
    
    // Production URL - change to your domain
    const PROD_URL = 'https://theclayborngroup.com';
    const REDIRECT_URI = `${PROD_URL}/api/auth/callback`;
    
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    
    authUrl.searchParams.set('client_id', CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', 'https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email');
    authUrl.searchParams.set('access_type', 'offline');
    authUrl.searchParams.set('prompt', 'consent');
    authUrl.searchParams.set('state', Math.random().toString(36).substring(2, 15));
    
    console.log('🔗 Ngrok OAuth2 URL:', authUrl.toString());
    console.log('📍 Redirect URI:', REDIRECT_URI);
    
    return NextResponse.redirect(authUrl.toString());
}
