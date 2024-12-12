import React from 'react'
import { formFields } from './ContactPage/ContactForm/ContactForm'

const CFMailTemplate = ({formData}: {
    formData: formFields
}) => {
  return (
    <div>
        <table>
            <tbody>
                {Object.keys(formData).map((item, index) => (
                    <tr key={index}>
                        <td className='capitalize'>{item}: </td>
                        <td>{formData[item as keyof formFields]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default CFMailTemplate