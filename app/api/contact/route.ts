import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// OAuth2 Configuration - using the same hardcoded credentials that work
const CLIENT_ID = '744011171711-2lj2btcn7cvc4jehtrdcl8aj3862thmp.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
// Production URL - change to your domain
const REDIRECT_URI = 'https://theclayborngroup.com/api/auth/callback';

// Professional email template
const createEmailContent = (data: any, request: NextRequest) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - The Clayborn Group</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a8a, #166534); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .content { background: #f9fafb; padding: 40px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #1e3a8a; display: block; margin-bottom: 8px; }
        .value { color: #374151; font-size: 16px; }
        .message { background: white; padding: 25px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 25px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 25px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
        .urgent { background: linear-gradient(135deg, #fef2f2, #fee2e2); border: 1px solid #fca5a5; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .urgent h3 { color: #dc2626; margin: 0 0 10px 0; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">📬 The Clayborn Group</div>
            <h1>New Contact Form Submission</h1>
            <h2>Professional Tax Preparation Services</h2>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">👤 Client Name:</span>
                <span class="value">${data.name}</span>
            </div>
            
            <div class="field">
                <span class="label">📧 Email Address:</span>
                <span class="value">${data.email}</span>
            </div>
            
            ${data.phone ? `
            <div class="field">
                <span class="label">📞 Phone Number:</span>
                <span class="value">${data.phone}</span>
            </div>
            ` : ''}
            
            ${data.service ? `
            <div class="field">
                <span class="label">💼 Service Requested:</span>
                <span class="value">${data.service}</span>
            </div>
            ` : ''}
            
            ${data.urgency && data.urgency !== 'planning-ahead' ? `
            <div class="urgent">
                <h3>⚠️ URGENT INQUIRY</h3>
                <p><strong>Priority Level:</strong> ${data.urgency.toUpperCase()}</p>
            </div>
            ` : ''}
            
            <div class="message">
                <div class="label">💬 Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>📅 Submission Date:</strong> ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
            })}</p>
            <p><strong>🌐 Client IP:</strong> ${request.headers.get('x-forwarded-for') || 'Unknown'}</p>
            <p><strong>🔗 Next Steps:</strong> Contact client within 24 hours</p>
            <p><strong>📧 Reply To:</strong> ${data.email}</p>
        </div>
    </div>
</body>
</html>
`;

// Initialize Gmail API with OAuth2
async function getGmailService() {
    const oauthTokens = (global as any).oauthTokens;
    
    if (!oauthTokens) {
        throw new Error('OAuth tokens not available. Please authorize Gmail first.');
    }
    
    const auth = new google.auth.OAuth2({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
    });
    
    auth.setCredentials(oauthTokens);
    
    return google.gmail({ version: 'v1', auth });
}

// Send email using OAuth2
async function sendEmailWithOAuth2(data: any, request: NextRequest) {
    try {
        const gmail = await getGmailService();
        const emailContent = createEmailContent(data, request);
        
        const email = [
            `To: gailsswalker@gmail.com,anitabrinson2470@gmail.com,dclayborn@visitingangels.com`,
            `From: "The Clayborn Group" <dclayborn@visitingangels.com>`,
            `Reply-To: ${data.email}`,
            `Subject: 📬 New Contact: ${data.name} - ${data.service || 'General Inquiry'}`,
            `MIME-Version: 1.0`,
            `Content-Type: text/html; charset=utf-8`,
            `Content-Transfer-Encoding: 7bit`,
            ``,
            emailContent,
            ``,
        ].join('\r\n');
        
        const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-');
        
        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedEmail,
            },
        });
        
        console.log('✅ Email sent successfully via OAuth2:', { name: data.name, email: data.email, service: data.service });
        
    } catch (error) {
        console.error('❌ OAuth2 Email error:', error);
        throw error;
    }
}

// OAuth2 callback handler
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    
    if (!code) {
        return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
    }
    
    try {
        const { tokens } = await new google.auth.OAuth2({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            redirectUri: REDIRECT_URI,
        }).getToken(code);
        
        // Store tokens globally
        (global as any).oauthTokens = tokens;
        
        return NextResponse.redirect('/contact?auth=success');
        
    } catch (error) {
        console.error('OAuth2 callback error:', error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
}

// Main contact form handler
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service, urgency, message } = body;
        
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using OAuth2
        await sendEmailWithOAuth2({ name, email, phone, service, urgency, message }, request);
        
        return NextResponse.json(
            { 
                success: true, 
                message: 'Thank you for your inquiry! We will contact you within 24 hours.' 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('❌ Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to process submission. Please try again or call us directly.' },
            { status: 500 }
        );
    }
}
