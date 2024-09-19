import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,

      once: true,
    });
  }, []);
  return (
    <div className="">
      <div className="flex flex-col  items-center justify-center p-8 h-full mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl flex  max-w-[1280px]">
          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="bg-white p-4 rounded-full shadow-md mb-4">
              <img
                src="https://static.wixstatic.com/media/bfcb9b_b49827742e3f4fd1b62d97bedd6e0d82~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
                alt="Piggy Bank Icon"
                className="h-12 w-12"
              />
            </div>
            <p className="text-lg font-light mb-2">
              Bottled water costs
              <br /> 200 times the price of tap water
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="bg-white p-4 rounded-full shadow-md mb-4">
              <img
                src="https://static.wixstatic.com/media/bfcb9b_d86c93d475f044b98a98894752b2969b~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
                alt="Water Drop Icon"
                className="h-12 w-12"
              />
            </div>
            <p className="text-lg font-light mb-2">
              FreeH2O is natural spring water and <br /> all of our containers
              are BPA free
            </p>
          </div>

          {/* <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img
              src="https://static.wixstatic.com/media/bfcb9b_918f7ef38a0a42358efab157edf47c31~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt="Charity Hands Icon"
              className="h-12 w-12"
            />
          </div>
          <p className="text-lg font-light mb-2">
            10% from each beverage is donated to charity
          </p>
        </div> */}

          {/* <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img
              src="https://static.wixstatic.com/media/bfcb9b_918f7ef38a0a42358efab157edf47c31~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt="Charity Hands Icon"
              className="h-12 w-12"
            />
          </div>
          <p className="text-lg font-light mb-2">
            10% from each beverage is donated to charity
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
