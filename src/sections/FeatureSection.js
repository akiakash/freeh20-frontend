import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src="" alt="Piggy Bank Icon" className="h-12 w-12" />
          </div>
          <p className="text-lg font-semibold mb-2">
            Bottled water costs 200 times the price of tap water
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src="" alt="Water Drop Icon" className="h-12 w-12" />
          </div>
          <p className="text-lg font-semibold mb-2">
            FreeH2O is natural spring water and all of our containers are BPA
            free
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src="" alt="Charity Hands Icon" className="h-12 w-12" />
          </div>
          <p className="text-lg font-semibold mb-2">
            10% from each beverage is donated to charity
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
