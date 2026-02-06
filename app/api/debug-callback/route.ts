import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    console.log('🔍 Debug callback received:', { 
        code: code ? 'present' : 'missing', 
        codeLength: code?.length,
        state, 
        error,
        url: request.url
    });
    
    return NextResponse.json({ 
        message: 'Debug callback working!',
        received: { 
            code: code ? 'present' : 'missing', 
            codeLength: code?.length,
            state, 
            error 
        },
        url: request.url,
        timestamp: new Date().toISOString()
    });
}
