import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildLeadEmailHtml } from "./email-template";

const FROM_EMAIL = "Blue Restoration <noreply@notifications.brestorations.com>";
const ADMIN_EMAILS = ["hernan.baravalle@gmail.com"];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: formData.email,
      bcc: ADMIN_EMAILS,
      subject: "We received your free assessment request!",
      html: buildLeadEmailHtml({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        comments: formData.comments,
        servicesOfInterest: formData.servicesOfInterest || [],
        isHomeOwner: formData.isHomeOwner,
        hasInsurance: formData.hasInsurance,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === "development" && error instanceof Error) {
      console.error("Error sending lead email:", error.message);
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
