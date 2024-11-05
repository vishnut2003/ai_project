import React from "react";
import ContactForm from "@/components/ContactPage/contactForm";
import ContactDetails from "@/components/ContactPage/contactDetails";
import BasicLayout from "@/layouts/BasicLayout";
import ContactSideBar from "@/components/ContactPage/contactSideBar";
const page = () => {
  return (
    <BasicLayout>
      <div className="flex mx-48 relative">
        <div className="flex flex-col  ">
          <ContactDetails />
          <ContactForm />
        </div >
        <div className="w-1/3 ">
        <ContactSideBar />
        </div>
      </div>
    </BasicLayout>
  );
};

export default page;
