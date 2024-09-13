import React from "react";
import ContactUsForm from "./ContactUsForm";
import bottle3d from "../assets/bottle3d.png";
import image5 from "../assets/image5.jpg";

function ContactUs() {
  return (
    <div>
      <div>
        <div
          className="flex justify-center h-[70vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] items-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image5})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10 flex flex-col w-full items-center max-w-[1280px] px-4 text-center">
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[90px] text-white font-bold leading-tight">
              Bring your brand to hand <br />
              <span className="text-[#54c6cd]">Free H2O</span> today!
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center px-20 pb-10 items-center">
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={bottle3d}
            alt="advertise"
            className="w-[200px] md:w-[300px] lg:w-[400px]"
          />
        </div>
        <div className="flex-1">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
