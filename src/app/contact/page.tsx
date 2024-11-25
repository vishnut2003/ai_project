import React from "react";
import ContactForm from "@/components/ContactPage/contactForm";
import ContactDetails from "@/components/ContactPage/contactDetails";
import BasicLayout from "@/layouts/BasicLayout";
import ContactSideBar from "@/components/ContactPage/contactSideBar";
const page = () => {
  return (
    <BasicLayout>
      <div className="flex justify-center space-x-10">
        <div className="flex flex-col mr-7 ">
          <ContactDetails />
          <ContactForm />
        </div >
        <div className="w-96 ">
        <ContactSideBar />
        </div>
      </div>
    </BasicLayout>
  );
};

export default page;
