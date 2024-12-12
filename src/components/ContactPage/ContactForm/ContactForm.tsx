'use client';

import TripleDotLoading from "@/components/TripleDotLoading/TripleDotLoading";
import { handleContactFormSubmit } from "@/utils/client/ContactFormHelper";
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

export interface formFields {
    name: string,
    phone: string,
    email: string,
}

const ContactForm = () => {

    const [buttonProgress, setButtonProgress] = useState(false);

    const [formData, setFormData] = useState<formFields>({
        name: '',
        phone: '',
        email: '',
    })
    const [submitStatus, setSubmitStatus] = useState<{
        status: 'pending' | 'error' | 'success',
        message: string
    }>({
        status: "pending",
        message: ''
    });

    function _submitContactform(e: FormEvent) {
        e.preventDefault();
        setButtonProgress(true)

        handleContactFormSubmit({ formData: formData })
            .then(() => {
                setSubmitStatus({
                    status: "success",
                    message: "Form submit successfully..."
                });
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

                <button
                disabled={submitStatus.status !== "pending"}
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