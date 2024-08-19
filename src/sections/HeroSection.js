import React from "react";

export default function HeroSection() {
  return (
    <div className="max-w-[1280px] mx-auto  flex flex-row h-full ">
      <div className="flex-1 flex items-center flex-col justify-center  gap-4">
        <div className=" flex items-center text-[20px] font-normal text-justify">
          freeH2o is an innovative advertising platform that utilizes premium
          spring water as a new type of advertising medium while prioritizing
          philanthropy and sustainability. 10% from each beverage is donated to
          charity to fight the global water crisis. We only need 10% of Sri
          lankan to choose freeh20 so we can solve the global water crisis
          permanently.
        </div>
        <div className="w-full ">
          <button
            type="button"
            className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 "
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src="./bottle.png" />
      </div>
    </div>
  );
}
