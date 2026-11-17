import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { buildLeadEmailHtml } from "./email-template";
import { CONTACT_EMAIL } from "@/constants";
import { SERVICES } from "@/constants/services";

const FROM_EMAIL = "Blue Restoration <noreply@notifications.brestorations.com>";
const ADMIN_EMAILS = ["hernan.baravalle@gmail.com", CONTACT_EMAIL];

const SERVICE_LABELS = SERVICES.map((service) => service.label);

const leadSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().max(254).pipe(z.email()),
  phone: z.string().trim().max(30).optional(),
  zipCode: z.string().trim().max(10).optional(),
  comments: z.string().trim().max(2000).optional(),
  servicesOfInterest: z
    .array(z.string())
    .transform((list) => SERVICE_LABELS.filter((label) => list.includes(label)))
    .pipe(z.array(z.string()).min(1)),
  isHomeOwner: z.enum(["Yes", "No"]).optional(),
  hasInsurance: z.enum(["Yes", "No"]).optional(),
});

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid request" }, 400);
  }

  // Honeypot filled: answer success so the bot doesn't retry, but send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ success: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      { success: false, error: "Please fill in all required fields." },
      400
    );
  }
  const lead = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY");
    return json({ success: false, error: "Server configuration error" }, 500);
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      bcc: ADMIN_EMAILS,
      subject: "We received your free assessment request!",
      html: buildLeadEmailHtml(lead),
    });
    if (error) throw new Error(`Resend: ${error.message}`);
  } catch (error) {
    console.error(
      "Error sending lead email:",
      error instanceof Error ? error.message : error
    );
    return json({ success: false, error: "Failed to send email" }, 500);
  }

  return json({ success: true });
}
