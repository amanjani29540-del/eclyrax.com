import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, submissionType, destination } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In production, integrate with email service (SendGrid, AWS SES, etc.)
    // For now, log the submission
    console.log("Architecture Review Submission:", {
      submissionType,
      destination,
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending
    // await sendEmail({
    //   to: destination,
    //   subject: `Architecture Review Request from ${company}`,
    //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    // });

    return NextResponse.json(
      { success: true, message: "Request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Architecture Review submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}