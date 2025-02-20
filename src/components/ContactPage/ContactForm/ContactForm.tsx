'use client';

import TripleDotLoading from "@/components/TripleDotLoading/TripleDotLoading";
import { handleContactFormSubmit } from "@/utils/client/ContactFormHelper";
import { useRouter } from "next/navigation";
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

export interface formFields {
    name: string,
    phone: string,
    email: string,
    message: string,
}

const ContactForm = () => {

    const router = useRouter();

    const [buttonProgress, setButtonProgress] = useState(false);

    const [formData, setFormData] = useState<formFields>({
        name: '',
        phone: '',
        email: '',
        message: '',
    })
    const [submitStatus, setSubmitStatus] = useState<{
        status: 'pending' | 'error' | 'success',
        message: string
    }>({
        status: "pending",
        message: ''
    });

    async function _submitContactform(e: FormEvent) {
        e.preventDefault();
        setButtonProgress(true);
        setSubmitStatus({
            status: "pending",
            message: "",
        })

        // validate contact form
        
        // validate for phone
        if (!/^\d{10}$/.test(formData.phone)) {
            setSubmitStatus({
                status: "error",
                message: "Please enter valid phone number",
            })
            setButtonProgress(false);
            return;
        } 
        
        // Submit form data
        handleContactFormSubmit({ formData: formData })
            .then(() => {
                setSubmitStatus({
                    status: "success",
                    message: "Form submit successfully..."
                });
                router.push('/contact/thank-you');
            })
            .catch(() => {
                setSubmitStatus({
                    status: "error",
                    message: "Something went wrong..."
                })
            })
            .finally(() => {
                setButtonProgress(false)
            })
    }

    return (
        <div className="w-full">

            <form onSubmit={_submitContactform} className="flex flex-col gap-3">
                <FormFields fieldType="text" label="Name" name="name" placeholder="Name" setStateObject={setFormData} stateObject={formData} required />
                <FormFields fieldType="text" label="Phone Number" name="phone" placeholder="Phone Number" setStateObject={setFormData} stateObject={formData} required />
                <FormFields fieldType="email" label="Email" name="email" placeholder="Email Address" setStateObject={setFormData} stateObject={formData} />
                
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Message</label>
                    <textarea
                        rows={3}
                        placeholder="Message"
                        className="text-secodary-color py-2 px-3 rounded-md"
                        value={formData.message}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                message: e.target.value
                            })
                        }}
                    ></textarea>
                </div>

                <button
                    disabled={buttonProgress}
                    className="w-full p-3 bg-secodary-color shadow-md shadow-black/50 font-semibold text-base text-white mt-4 rounded-md border"
                >
                    {buttonProgress ? <TripleDotLoading/> : <>Get In Touch</>}
                </button>
                {
                    submitStatus.status === "success" ?
                        <div className={`py-3 px-5 rounded-md bg-green-200 text-green-500`}>
                            <p className="m-0">{submitStatus.message}</p>
                        </div>
                        :
                        submitStatus.status === "error" &&
                        <div className={`py-3 px-5 rounded-md bg-red-200 text-red-500`}>
                            <p className="m-0">{submitStatus.message}</p>
                        </div>
                }
            </form>
        </div>
    )
}

function FormFields({ setStateObject, stateObject, name, placeholder, label, fieldType, required }: {
    setStateObject: Dispatch<SetStateAction<formFields>>,
    stateObject: formFields,
    name: string,
    placeholder: string,
    label: string,
    fieldType: string,
    required?: boolean
}) {
    return (
        <div className="flex flex-col gap-1">
            <label
                className="font-semibold"
                htmlFor={name}>{label}</label>
            <input
                value={stateObject[name as keyof formFields]}
                onChange={(e) => {

                    // validate for name
                    if (name === "name") {
                        if (/\d/.test(e.target.value)) {
                            return;
                        }
                    }

                    // change value
                    setStateObject({
                        ...stateObject,
                        [name]: e.target.value
                    })
                }}
                type={fieldType}
                name={name}
                required={required}
                placeholder={placeholder}
                className="text-secodary-color py-2 px-3 rounded-md"
            />
        </div>
    )
}

export default ContactForm