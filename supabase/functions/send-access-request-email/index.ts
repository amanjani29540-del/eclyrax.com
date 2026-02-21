import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  // ✅ CORS preflight
  if (req?.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }

  try {
    const { fullName, email, companyName, contactNumber, companyWebsite, sector, projectDescription, timestamp } = await req?.json();

    const RESEND_API_KEY = Deno?.env?.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Email 1: Confirmation to User
    const userEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Request Received - eclyraX</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #121212; border: 1px solid #2a2a2a; border-radius: 6px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center; border-bottom: 1px solid #2a2a2a;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #d4af37; letter-spacing: 0.5px;">eclyraX</h1>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Infrastructure Platform</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #e5e5e5;">Access Request Received</h2>
              
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #b0b0b0;">
                Thank you for your interest in eclyraX infrastructure. We have received your access request and our team will review your submission within 48 hours.
              </p>
              
              <!-- Request Details -->
              <div style="background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 24px; margin: 24px 0;">
                <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #d4af37; text-transform: uppercase; letter-spacing: 0.5px;">Request Details</h3>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #888; width: 140px;">Company</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #e5e5e5; font-weight: 500;">${companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #888;">Email</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #e5e5e5; font-weight: 500;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #888;">Sector</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #e5e5e5; font-weight: 500;">${sector}</td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 24px 0 0 0; font-size: 14px; line-height: 1.6; color: #888;">
                Our institutional review team will assess your request and contact you directly via the provided email address.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #2a2a2a; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.5;">
                This is an automated confirmation from eclyraX.<br>
                Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Email 2: Admin Notification
    const adminEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Access Request - ${companyName}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #121212; border: 1px solid #2a2a2a; border-radius: 6px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; border-bottom: 1px solid #2a2a2a;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #d4af37; letter-spacing: 0.5px;">eclyraX</h1>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Admin Notification</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600; color: #e5e5e5;">New Access Request</h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #888;">${companyName}</p>
              
              <!-- Request Data -->
              <div style="background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 24px; margin: 24px 0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; width: 180px; vertical-align: top;">Full Name</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Contact Number</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${contactNumber}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Company Name</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Company Website</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${companyWebsite || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Official Email</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Sector / Industry</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${sector}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; font-size: 13px; color: #888; border-top: 1px solid #2a2a2a; vertical-align: top;">Submitted</td>
                    <td style="padding: 12px 0; font-size: 14px; color: #e5e5e5; font-weight: 500; border-top: 1px solid #2a2a2a;">${new Date(timestamp)?.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Project Description -->
              <div style="background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 24px; margin: 24px 0;">
                <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 600; color: #d4af37; text-transform: uppercase; letter-spacing: 0.5px;">Project Description</h3>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #b0b0b0; white-space: pre-wrap;">${projectDescription}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #2a2a2a; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                Automated notification from eclyraX Access Control System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send both emails via Resend API
    const results = await Promise.allSettled([
      // User confirmation email
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: [email],
          subject: "Access Request Received - eclyraX",
          html: userEmailHtml
        })
      }),
      // Admin notification email
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: ["info@nircgroup.com"],
          subject: `New Access Request - ${companyName}`,
          html: adminEmailHtml
        })
      })
    ]);

    const userEmailResult = results?.[0];
    const adminEmailResult = results?.[1];

    return new Response(JSON.stringify({
      success: true,
      userEmail: userEmailResult.status === "fulfilled" ? "sent" : "failed",
      adminEmail: adminEmailResult.status === "fulfilled" ? "sent" : "failed",
      message: "Emails processed"
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
});