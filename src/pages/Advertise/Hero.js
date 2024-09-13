import React from "react";
import "./Hero.css";

export default function HeroAdvertise() {
  return (
    <div className="flex justify-center h-[100vh] items-center  bg-[url('https://freeh2o.s3.ap-southeast-2.amazonaws.com/IMG_8797.png')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className=" relative z-10  flex flex-col w-full   items-center  max-w-[1280px]">
        <div class=" w-full">
          <p className="text-[120px] text-[#54c6cd] font-semibold text-left flex items-center">
            DISTRIBUTE{" "}
            {/* <img
              src="https://freeh2o.s3.ap-southeast-2.amazonaws.com/bottlepng.png"
              className="w-[45px] h-[100px] items-center -rotate-12 ml-5"
            /> */}
          </p>
        </div>
        <div className="text-[120px] text-[#54c6cd] font-semibold   justify-end flex w-full ">
          <p>FREE WATER</p>
        </div>
        {/* <div className="">
          <img
            src="https://freeh2o.s3.ap-southeast-2.amazonaws.com/advertisee.png"
            alt=""
            className=" rounded-[20px] object-cover w-[200px]"
          />
        </div> */}

        {/* <div class="portfolio-image"></div> */}
      </div>
    </div>
  );
}
