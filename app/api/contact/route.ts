import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  message: z.string().min(10).max(2500)
});

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as unknown;
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { message: "Please provide valid contact details and message." },
        { status: 400 }
      );
    }

    // Integration point for real delivery provider (Resend, SES, etc).
    console.info("Portfolio contact request:", {
      name: result.data.name,
      email: result.data.email,
      messageLength: result.data.message.length
    });

    return NextResponse.json({
      message:
        "Message received. Thank you for reaching out. I will get back to you soon."
    });
  } catch {
    return NextResponse.json(
      { message: "Could not process your request. Please try again." },
      { status: 500 }
    );
  }
}
