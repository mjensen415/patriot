import { NextResponse } from "next/server";

// Brevo API Endpoint: POST https://api.brevo.com/v3/contacts
// Payload structure:
// {
//   "email": "user@example.com",
//   "listIds": [2]
// }

export async function POST(request: Request) {
  try {
    const { email, website } = await request.json();

    // Honeypot check: if website field is filled out, silently succeed
    if (website) {
      return NextResponse.json({ success: true, message: "You're in, Patriot!" });
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const API_KEY = process.env.BREVO_API_KEY;
    if (!API_KEY) {
      console.error("Missing BREVO_API_KEY environment variable");
      return NextResponse.json(
        { success: false, message: "Signup failed, please try again." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [2],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API error:", response.status, errorData);
      
      // Handle the case where the user is already subscribed
      if (errorData.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true, message: "You're in, Patriot!" });
      }

      throw new Error(`Brevo API returned status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "You're in, Patriot!" });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Signup failed, please try again." },
      { status: 500 }
    );
  }
}
