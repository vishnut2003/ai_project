import React from 'react';
import ContactForm from '@/components/ContactPage/contactForm';
import ContactDetails from '@/components/ContactPage/contactDetails';
import BasicLayout from '@/layouts/BasicLayout';
import Container, { ContainerWithChildren } from 'postcss/lib/container';
import ContactSideBar from '@/components/ContactPage/contactSideBar';
const page = () => {
  return (
    <BasicLayout>
    <ContactDetails />
    <ContactForm />
    <ContactSideBar />
    </BasicLayout>
  )
}

export default page