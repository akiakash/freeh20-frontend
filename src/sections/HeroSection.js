import React, { useEffect } from "react";
import AOS from "aos";
import Bottle from "../assets/blackbottle.png";
import "aos/dist/aos.css"; // Import the AOS styles

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true,
    });
  }, []);
  return (
    <div className="flex justify-center px-10 mt-[60px]">
      <div className="max-w-[1280px] mx-auto flex  justify-center  flex-col-reverse md:flex-row-reverse  p-4 h-full">
        <div className="flex-1 flex items-center flex-col justify-center gap-4 text-center md:text-left ">
          <div
            className="text-[16px] md:text-[20px] font-light text-justify"
            data-aos="fade-up"
          >
            Free H2O offers a brand new alternative to traditional advertising ,
            featuring ad spaces through our bottle canvas with QR code
            integration. In a world where ads are often overlooked, we provide
            brands a unique and personalized way to engage directly with their
            audience. We don’t just advertise – we deliver brands into
            consumers' hands, creating an unforgettable experience with tailored
            messages and exclusive offers. Our advertising solution helps you to
            stand out from the cluttered digital ad space.
          </div>
          <div className="w-full mt-10" data-aos="fade-up">
            <button
              type="button"
              className="cursor-pointer py-2.5 px-5 mb-2 text-sm font-medium  hover:bg-[#40a1b2] text-white bg-[#54C6CD] rounded-lg    border-[1px]"
            >
              Get Started
            </button>
          </div>
        </div>
        <div
          className="flex-1 flex justify-center mb-4 md:mb-0"
          data-aos="fade-up"
        >
          <img src={Bottle} className="w-[300px] " alt="Bottle" />
        </div>
      </div>
    </div>
  );
}
