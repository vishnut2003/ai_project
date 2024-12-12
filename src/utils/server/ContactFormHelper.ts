import CFMailTemplate from "@/components/CFMailTemplate";
import { formFields } from "@/components/ContactPage/ContactForm/ContactForm";
import { Resend } from "resend";

export async function contactSubmitMailing({ formData }: {
    formData: formFields,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const sendMail = await resend.emails.send({
                from: process.env.CF_FROM_EMAIL!,
                to: process.env.CF_TO_EMAIL!,
                subject: process.env.CF_SUBJECT!,
                react: CFMailTemplate({formData: formData})
            });
            
            if(sendMail.error) throw sendMail.error;

            resolve()
        } catch (err) {
            reject(err);
        }
    })
}