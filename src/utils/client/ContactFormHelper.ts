import { formFields } from "@/components/ContactPage/ContactForm/ContactForm";
import axios from "axios";

export function handleContactFormSubmit ({formData}: {
    formData: formFields,
}) {
    return new Promise<void>( async (resolve, reject) => {
        try {
            const response = await axios.post('/api/contact-form/submit', formData);
            resolve();
        } catch (err) {
            console.log(err);
            reject();
        }
    })
}