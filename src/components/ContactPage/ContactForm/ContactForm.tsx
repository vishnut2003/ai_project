'use client';

import { Dispatch, SetStateAction, useState } from "react"

interface formFields {
    name: string,
    phone: string,
    email: string,
    message: string
}

const ContactForm = () => {

    const [formData, setFormData] = useState<formFields>({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

  return (
    <div className="w-full">
        
        <form className="flex flex-col gap-3">
            <FormFields fieldType="text" label="Name" name="name" placeholder="Name" setStateObject={setFormData} stateObject={formData} required/>           
            <FormFields fieldType="text" label="Phone Number" name="phone" placeholder="Phone Number" setStateObject={setFormData} stateObject={formData} required/>           
            <FormFields fieldType="email" label="Email" name="email" placeholder="Email Address" setStateObject={setFormData} stateObject={formData} />

            <button
            className="w-full p-3 bg-white font-semibold text-base text-secodary-color mt-4 rounded-md"
            >Get In Touch</button>
        </form>
    </div>
  )
}

function FormFields ({setStateObject, stateObject, name, placeholder, label, fieldType, required}: {
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