import { NextRequest, NextResponse } from 'next/server';

// Simple contact form handler - no OAuth2 for now
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Basic validation
    const { name, email, phone, service, message } = data;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the submission (for now)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Add email sending logic here
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
      received: {
        name,
        email,
        service
      }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
