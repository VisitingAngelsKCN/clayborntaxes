import { NextRequest, NextResponse } from 'next/server';

// Enhanced contact form handler with email notifications
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

    // Log submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Add email service here (Resend, SendGrid, or Nodemailer)
    // For now, we'll store in Vercel logs and return success
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
      received: {
        name,
        email,
        service,
        timestamp: new Date().toISOString()
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
