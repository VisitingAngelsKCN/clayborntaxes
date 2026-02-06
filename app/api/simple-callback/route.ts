import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    console.log('🔍 Simple callback received:', { code: code ? 'present' : 'missing', state, error });
    
    if (error) {
        console.error('OAuth2 error:', error);
        return NextResponse.redirect('https://fragmentarily-panheaded-dawne.ngrok-free.dev/contact?auth=error');
    }
    
    if (!code) {
        return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
    }
    
    try {
        // Test if googleapis import works
        const { google } = require('googleapis');
        console.log('✅ googleapis imported successfully');
        
        // Test OAuth2 client creation
        const CLIENT_ID = '744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com';
        const CLIENT_SECRET = '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';
        const REDIRECT_URI = 'https://fragmentarily-panheaded-dawne.ngrok-free.dev/api/simple-callback';
        
        const oauth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        );
        console.log('✅ OAuth2 client created successfully');
        
        // Test token exchange
        const { tokens } = await oauth2Client.getToken(code);
        console.log('✅ Tokens received successfully');
        
        // Store tokens globally
        (global as any).oauthTokens = tokens;
        
        return NextResponse.redirect('https://fragmentarily-panheaded-dawne.ngrok-free.dev/contact?auth=success&message=' + encodeURIComponent('Gmail authorization successful!'));
        
    } catch (error) {
        console.error('❌ OAuth2 error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorStack = error instanceof Error ? error.stack : 'No stack trace';
        
        return NextResponse.json({ 
            error: 'OAuth2 failed', 
            details: errorMessage,
            stack: errorStack 
        }, { status: 500 });
    }
}
