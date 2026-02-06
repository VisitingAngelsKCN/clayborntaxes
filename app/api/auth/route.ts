import { NextRequest, NextResponse } from 'next/server';

// Temporarily hardcoded for testing - will fix env vars later
const CLIENT_ID = '744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3001/api/auth/callback';

export async function GET(request: NextRequest) {
    if (!CLIENT_ID) {
        return NextResponse.json({ error: 'GOOGLE_CLIENT_ID not configured' }, { status: 500 });
    }
    
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    
    authUrl.searchParams.set('client_id', CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', 'https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email');
    authUrl.searchParams.set('access_type', 'offline');
    authUrl.searchParams.set('prompt', 'consent');
    authUrl.searchParams.set('state', Math.random().toString(36).substring(2, 15)); // Random state for security
    
    console.log('OAuth2 Auth URL:', authUrl.toString());
    console.log('Client ID:', CLIENT_ID);
    console.log('Redirect URI:', REDIRECT_URI);
    
    // Log the exact redirect URI for debugging
    console.log('🔍 Make sure this redirect URI is added to Google Cloud Console:');
    console.log('📍', REDIRECT_URI);
    
    return NextResponse.redirect(authUrl.toString());
}
