import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const env = {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET',
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET',
        GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI || 'NOT SET',
        NODE_ENV: process.env.NODE_ENV || 'NOT SET'
    };
    
    return NextResponse.json({ 
        environment: env,
        timestamp: new Date().toISOString()
    });
}
