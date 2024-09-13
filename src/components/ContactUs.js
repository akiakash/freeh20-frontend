import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import ContactUsForm from "./ContactUsForm";
import bottle3d from "../assets/bottle3d.png";
import image5 from "../assets/image5.jpg";

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div>
        <div
          className="flex justify-center h-[70vh]  md:h-[40vh] lg:h-[50vh] xl:h-[60vh] items-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image5})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10 flex flex-col w-full items-center max-w-[1280px] px-4 text-center">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[90px] text-white font-bold leading-tight"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Bring your brand to hand <br />
              <span className="text-[#54c6cd]">Free H2O</span> today!
            </h1>
          </div>
        </div>
      </div>
      <div className="justify-center flex w-full ">
        <div className="flex flex-col-reverse md:flex-row justify-center  pb-10 items-center  w-[1280px] justify-between">
          <div
            className="flex-1 mt-10 md:mt-0 w-full"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={bottle3d}
              alt="advertise"
              className="md:block hidden w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            />
          </div>
          <div
            className="flex-1 w-full "
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
