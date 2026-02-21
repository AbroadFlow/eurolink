import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
                name: data.name,
                phone: data.phone,
                email: data.email,
                destination: data.destination,
                message: data.message,
            },
        }),
    });

    if (!response.ok) {
        const errorData = await response.text();
        return NextResponse.json({ success: false, error: errorData }, { status: 400 });
    }

    return NextResponse.json({ success: true });
}