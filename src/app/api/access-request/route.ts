import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '../../../lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, contactNumber, companyName, companyWebsite, email, sector, projectDescription } = body;

    // Validate required fields
    if (!fullName || !contactNumber || !companyName || !email || !sector || !projectDescription) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Create Supabase client
    const supabase = await createClient();

    // Insert data into access_requests table
    const { data, error } = await supabase
      .from('access_requests')
      .insert({
        full_name: fullName,
        contact_number: contactNumber,
        company_name: companyName,
        company_website: companyWebsite || null,
        email: email,
        sector: sector,
        project_description: projectDescription
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit request. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation and admin notification emails via Resend Edge Function
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-access-request-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          contactNumber,
          companyWebsite: companyWebsite || 'Not provided',
          sector,
          projectDescription,
          timestamp: data.created_at || new Date().toISOString()
        })
      });

      if (!emailResponse.ok) {
        console.error('Email sending failed:', await emailResponse.text());
        // Continue anyway - data is saved to Supabase
      }
    } catch (emailError) {
      console.error('Email error (non-critical):', emailError);
      // Continue anyway - data is saved to Supabase
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been received. Our team will respond within 48 hours.',
        data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}