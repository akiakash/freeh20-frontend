import React from "react";
import ContactUsForm from "./ContactUsForm";
import bottle3d from "../assets/bottle3d.png";

function ContactUs() {
  return (
    <div className="flex flex-row justify-center px-20 items-center">
      <div className="flex-1">
        <ContactUsForm />
      </div>
      <div>
        <div className="flex-1">
          <img src={bottle3d} alt=" advertise " className="w-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
