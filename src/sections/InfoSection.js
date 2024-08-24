import React from "react";

const sectionsData = [
  {
    id: 1,
    text: "They work exclusively with local partners who build sustainable, community-owned water projects. Their partners also facilitate comprehensive water, sanitation, and hygiene programming to protect everyone’s long-term health.",
    buttonText: "Learn more",
    imageUrl:
      "https://static.wixstatic.com/media/bfcb9b_3c6cf264b29e49838779345fd1a18d20~mv2.webp/v1/fill/w_888,h_667,al_c,q_85,enc_auto/free-water-drinking-image-1.webp",
    altText: "Image of clarity",
  },
  {
    id: 2,
    text: "Another section with different content and text. This is where you can provide more information or different content based on the array data.",
    buttonText: "Read more",
    imageUrl:
      "https://static.wixstatic.com/media/1a6021_8e3bf82b1ec84d66a23106181499afc8~mv2.jpeg/v1/crop/x_333,y_3,w_1587,h_1075/fill/w_1040,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/charity-water-social-preview.jpeg",
    altText: "Another descriptive alt text",
  },
  {
    id: 3,
    text: "They work exclusively with local partners who build sustainable, community-owned water projects. Their partners also facilitate comprehensive water, sanitation, and hygiene programming to protect everyone’s long-term health.",
    buttonText: "Learn more",
    imageUrl:
      "https://static.wixstatic.com/media/bfcb9b_3c6cf264b29e49838779345fd1a18d20~mv2.webp/v1/fill/w_888,h_667,al_c,q_85,enc_auto/free-water-drinking-image-1.webp",
    altText: "Image of clarity",
  },
];

const InfoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 max-w-[1280px] mx-auto mt-20">
      {sectionsData.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse gap-10" : ""
          } justify-center items-center p-6 bg-white rounded-lg mb-8 gap-10`}
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

          <div className="md:w-1/2 mt-8 md:mt-0 ">
            <img
              src={section.imageUrl}
              alt={section.altText}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
