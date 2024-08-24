import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

function BannerAdvertise() {
  useEffect(() => {
    AOS.init({
      duration: 1000,

      once: true,
    });
  }, []);
  return (
    <div className="w-full ">
      <div className="max-w-[1280px] mx-auto py-4 bg-black rounded-[50px] px-20">
        <div className=" h-full  w-full">
          <div className="flex flex-row gap-10 justify-between">
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="p-4 rounded-full shadow-md ">
                <img
                  src="https://static.wixstatic.com/media/bfcb9b_4700e2f59a614c0dabd343af94cd9952~mv2.webp"
                  alt="Piggy Bank Icon"
                  className="w-[131px]"
                />
              </div>
              <p className="text-lg font-light mb-2 text-white max-w-[150px]">
                more impressions than direct mail
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className=" p-4 rounded-full shadow-md ">
                <img
                  src="https://static.wixstatic.com/media/bfcb9b_45630e9492e0437babc8c0283afa0289~mv2.webp"
                  alt="Water Drop Icon"
                  className="w-[131px]"
                />
              </div>
              <p className="text-lg font-light mb-2 text-white max-w-[150px]">
                cheaper per ten impressions than direct mail
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className=" p-4 rounded-full shadow-md ">
                <img
                  src="https://static.wixstatic.com/media/bfcb9b_38d5cbebb5204762946d62ecfa8601f3~mv2.webp"
                  alt="Charity Hands Icon"
                  className="w-[131px]"
                />
              </div>
              <p className="text-lg font-light mb-2 text-white max-w-[150px]">
                return on investment
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className=" p-4 rounded-full shadow-md mb-4">
                <img
                  src="https://static.wixstatic.com/media/bfcb9b_aa2a99c0b5494c6b8dde30f5fc655b02~mv2.webp"
                  alt="Charity Hands Icon"
                  className="w-[131px]"
                />
              </div>
              <p className="text-lg font-light mb-2 text-white max-w-[150px]">
                saving lives and helping the planet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAdvertise;
