import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;
    const SOICustomFieldId = process.env.GOHIGHLEVEL_SERVICE_CUSTOM_FIELD_ID;

    if (!apiKey || !locationId) {
      console.error("Missing GoHighLevel API credentials");
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        { status: 500 }
      );
    }

    const payload: Record<string, unknown> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      postalCode: formData.zipCode,
      locationId: locationId,
      timezone: "America/New_York",
      tags: formData.tags || [],
    };

    const customFields = [];

    if (formData.servicesOfInterest && formData.servicesOfInterest.length > 0) {
      customFields.push({
        id: SOICustomFieldId,
        value: formData.servicesOfInterest,
      });
    }

    if (formData.comments && formData.comments.trim()) {
      customFields.push({
        key: "comments",
        field_value: formData.comments,
      });
    }

    if (customFields.length > 0) {
      payload.customFields = customFields;
    }

    console.log("📤 Sending to GoHighLevel:", JSON.stringify(payload, null, 2));
    console.log("📋 Custom Fields:", JSON.stringify(customFields, null, 2));

    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ GoHighLevel Error Response:", errorData);
      throw new Error("Failed to create contact");
    }

    const result = await response.json();
    console.log(
      "✅ GoHighLevel Success Response:",
      JSON.stringify(result, null, 2)
    );

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development" && error instanceof Error) {
      console.error("Error creating contact:", error.message);
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create contact",
      },
      { status: 500 }
    );
  }
}
