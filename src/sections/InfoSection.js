import React from "react";

const sectionsData = [
  {
    id: 1,
    text: "Elevate your brand’s presence with every bottle. Engage your audience with personalized messages and exclusive offers they can’t miss.",
    buttonText: "Reach Us",
    imageUrl:
      "https://freeh2o.s3.ap-southeast-2.amazonaws.com/IMG_8674+(1).png",
    altText: "Image of clarity",
  },
  {
    id: 2,
    text: " Create memorable connections. Our bottle canvases transform everyday moments into powerful brand experiences that stand out.",
    buttonText: "Reach Us",
    imageUrl: "https://freeh2o.s3.ap-southeast-2.amazonaws.com/IMG_0229.JPG",
    altText: "Another descriptive alt text",
  },
  {
    id: 3,
    text: "Go beyond digital clutter. Showcase your brand on eco-friendly bottles that not only promote your message but also support sustainability.",
    buttonText: "Reach Us",
    imageUrl: "https://freeh2o.s3.ap-southeast-2.amazonaws.com/advertisee.png",
    altText: "Image of clarity",
  },
];

const InfoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 max-w-[1280px] mx-auto mt-20">
      {sectionsData.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse gap-10" : ""
          } justify-center items-center p-6 bg-white rounded-lg md:mb-8 gap-10`}
        >
          <div className="md:w-1/2 flex flex-col justify-start items-start text-center md:text-left">
            <p className="text-[16px] md:text-[20px] font-light text-justify">
              {section.text}
            </p>
            <button
              type="button"
              className="cursor-pointer mt-4 py-2.5 px-5 mb-2 text-sm font-medium text-black border-[#54C6CD] rounded-lg border-[2px]"
            >
              {section.buttonText}
            </button>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0  ">
            <img
              src={section.imageUrl}
              alt={section.altText}
              className="md:w-full w-[300px] rounded-lg object-cover  h-[360px] "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
