import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8 ">
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-6 bg-white rounded-lg shadow-md">
        <p className="mb-6">
          They work exclusively with local partners who build sustainable,
          community-owned water projects. Their partners also facilitate
          comprehensive water, sanitation, and hygiene programming to protect
          everyone’s long-term health.
        </p>
        <button className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          learn more
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <img
          src="./bottle.png"
          alt="Image of clarity"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default InfoSection;
