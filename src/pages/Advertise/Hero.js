import React from "react";
import "./Hero.css";

export default function HeroAdvertise() {
  return (
    <div className="relative  flex justify-center items-center h-screen bg-[url('https://freeh2o.s3.ap-southeast-2.amazonaws.com/IMG_8797+(1).png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center w-full max-w-screen-xl px-4">
        <div className="w-full text-center md:text-left mb-4">
          <p className="sm:text-[60px] text-[50px] md:text-[80px] lg:text-8xl xl:text-9xl text-[#54c6cd] font-semibold sm:text-left text-center">
            DISTRIBUTE
            {/* <img
              src="https://freeh2o.s3.ap-southeast-2.amazonaws.com/bottlepng.png"
              className="w-[45px] h-[100px] items-center -rotate-12 ml-5"
            /> */}
          </p>
        </div>
        <div className="w-full text-center">
          <p className="sm:text-[60px] text-[50px] md:text-[80px] lg:text-8xl xl:text-9xl text-[#54c6cd] font-semibold sm:text-right text-center">
            FREE WATER
          </p>
        </div>
        {/* <div className="mt-4">
          <img
            src="https://freeh2o.s3.ap-southeast-2.amazonaws.com/advertisee.png"
            alt=""
            className="rounded-2xl object-cover w-48"
          />
        </div> */}
      </div>
    </div>
  );
}
