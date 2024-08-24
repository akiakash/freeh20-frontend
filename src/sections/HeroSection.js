import React, { useEffect } from "react";
import AOS from "aos";
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
    <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row  p-4 h-full">
      <div className="flex-1 flex items-center flex-col justify-center gap-4 text-center md:text-left">
        <div
          className="text-[16px] md:text-[20px] font-light"
          data-aos="fade-up"
        >
          freeH2o is an innovative advertising platform that utilizes premium
          spring water as a new type of advertising medium while prioritizing
          philanthropy and sustainability. 10% from each beverage is donated to
          charity to fight the global water crisis. We only need 10% of Sri
          Lankans to choose freeH2o so we can solve the global water crisis
          permanently.
        </div>
        <div className="w-full" data-aos="fade-up">
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
        <img src="./bottle.png" className="w-3/4 md:w-full" alt="Bottle" />
      </div>
    </div>
  );
}
