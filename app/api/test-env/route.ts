import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Test all possible environment variable sources
    const envVars = {
        'process.env.GOOGLE_CLIENT_ID': process.env.GOOGLE_CLIENT_ID,
        'process.env.GOOGLE_CLIENT_SECRET': process.env.GOOGLE_CLIENT_SECRET,
        'process.env.GOOGLE_REDIRECT_URI': process.env.GOOGLE_REDIRECT_URI,
        'process.env.NODE_ENV': process.env.NODE_ENV,
        'process.env.PATH': process.env.PATH ? 'SET' : 'NOT SET',
    };
    
    // Also check if .env.local file exists
    const fs = require('fs');
    const path = require('path');
    const envPath = path.join(process.cwd(), '.env.local');
    const envFileExists = fs.existsSync(envPath);
    
    return NextResponse.json({ 
        environment: envVars,
        envFileExists,
        envPath,
        cwd: process.cwd(),
        timestamp: new Date().toISOString()
    });
}
