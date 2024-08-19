import React from "react";

export default function HeroSection() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row h-full p-4">
      <div className="flex-1 flex items-center flex-col justify-center gap-4 text-center md:text-left">
        <div className="text-[16px] md:text-[20px] font-normal">
          freeH2o is an innovative advertising platform that utilizes premium
          spring water as a new type of advertising medium while prioritizing
          philanthropy and sustainability. 10% from each beverage is donated to
          charity to fight the global water crisis. We only need 10% of Sri
          Lankans to choose freeH2o so we can solve the global water crisis
          permanently.
        </div>
        <div className="w-full">
          <button
            type="button"
            className="cursor-pointer py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <img src="./bottle.png" className="w-3/4 md:w-full" alt="Bottle" />
      </div>
    </div>
  );
}
