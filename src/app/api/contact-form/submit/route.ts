import { formFields } from "@/components/ContactPage/ContactForm/ContactForm";
import { contactSubmitMailing } from "@/utils/server/ContactFormHelper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = (await request.json()) as formFields;

    try {
        await contactSubmitMailing({ formData: body });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}