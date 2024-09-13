import React from "react";
import { motion } from "framer-motion";
import advertiseImage from "../assets/herosample.png";
import BannerAdvertise from "../components/BannerAdvertise";
import TextAnimation from "../components/textAnimation/text";
import Contact from "../components/QuoteForm";
import Packages from "../components/packages";

const AdvertiseSection = () => {
  return (
    <div>
      <div className="flex justify-center  mt-[60px]">
        <section className="flex flex-col md:flex-row items-center p-12 md:p-24 max-w-[1280px]">
          <div className="max-w-[600px] text-white">
            <h1 className="text-4xl md:text-5xl mb-5 text-[#54C6CD]">
              Advertise with FreeH2O
            </h1>
            <p className="text-lg md:text-xl mt-5 leading-relaxed text-black font-ligh text-justify">
              Leverage the power of{" "}
              <span className="text-black font-normal">
                premium spring water
              </span>{" "}
              as a unique advertising medium. FreeH2O provides an innovative
              platform where your brand can reach new audiences while
              contributing to a greater cause. Our water bottles not only quench
              thirst but also carry your message directly to the consumer's
              hands.
            </p>
            <p className="text-lg md:text-xl mt-5 leading-relaxed text-black font-light text-justify">
              <span className="text-[#54C6CD] font-normal">Why choose us?</span>{" "}
              It's simple. Each bottle delivers your message while donating 10%
              of the proceeds to charity, helping to fight the global water
              crisis. By partnering with us, you’re not just promoting your
              brand—you’re making a difference.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 py-3 px-6 bg-[#54C6CD] text-white rounded-md text-lg cursor-pointer hover:bg-[#54C6CD]"
            >
              Start Advertising Today
            </motion.button>
          </div>
          <motion.img
            src={advertiseImage}
            alt="Advertise with FreeH2O"
            className="w-full md:w-[500px] mt-12 md:mt-0 md:ml-12 rounded-[20px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </section>
      </div>
      <div className="py-10">
        <BannerAdvertise />
      </div>
      <div className="py-10">
        <TextAnimation />
      </div>
      <div>
        <Packages />
      </div>
      <div className="py-10  text-center">
        <h1 className="md:text-[40px] text-[20px] font-semibold">
          {" "}
          Looking for Different Solution ?
        </h1>
        <h2 className="text-[20px] font-medium text-[#54C6CD]">
          Customize your plan Now
        </h2>
      </div>
      <Contact />
    </div>
  );
};

export default AdvertiseSection;
