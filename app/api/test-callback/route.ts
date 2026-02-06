import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    
    console.log('🔍 Test callback received:', { code: code ? 'present' : 'missing', state, error });
    
    return NextResponse.json({ 
        message: 'Test callback working!',
        received: { code: code ? 'present' : 'missing', state, error },
        timestamp: new Date().toISOString()
    });
}
