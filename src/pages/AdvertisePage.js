import React from "react";
import HeroAdvertise from "./Advertise/Hero";
import bottle from "../assets/bottle3d.png";
import blackBottle from "../assets/blackbottle.png";
import AdvertiseForm from "./Advertise/AdvertiseForm";

function AdvertisePage() {
  return (
    <div>
      <div>
        <HeroAdvertise />
      </div>
      <div className="flex justify-center">
        <div className="  py-[100px] max-w-[1280px]">
          <div className="text-center text-[60px] font-semibold pb-5">
            How We Distribute !
          </div>

          <div className="flex md:flex-row flex-col items-center   flex   justify-center">
            <div className="flex-1">
              <img src={bottle} alt=" advertise " className="w-[400px]" />
            </div>
            {/* <div>
          <img src={blackBottle} alt=" advertise " className="w-[400px]" />
        </div> */}

            <div className="flex-1 flex flex-col gap-5">
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px] ">
                  1.⁠ ⁠Paid by Advertisers
                </h1>
                <p className="font-semibold text-[16px]  text-[#54C6CD]  text-[#54C6CD]">
                  Advertisements are placed on our water bottles and sponsored
                  by brands.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">
                  2.⁠ ⁠Free Distribution at Events
                </h1>
                <p className="font-semibold text-[16px]  text-[#54C6CD]">
                  The water bottles are handed out for free to consumers at
                  various events.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">
                  3.⁠ ⁠Targeted Distribution
                </h1>
                <p className="font-semibold text-[16px] text-[#54C6CD]">
                  We select events that match the brand's target market to
                  ensure the right audience is reached.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">
                  4.⁠ ⁠QR Code Integration
                </h1>
                <p className="font-semibold text-[16px] text-[#54C6CD]">
                  Each bottle features a QR code that connects consumers
                  directly to your brand's landing page.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">5.⁠ ⁠Exclusive Offers</h1>
                <p className="font-semibold text-[16px] text-[#54C6CD]">
                  Customers can scan the QR code to visit the advertiser’s page,
                  where they can explore special offers and promotions.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">
                  6.⁠ ⁠Campaign Insights
                </h1>
                <p className="font-semibold text-[16px] text-[#54C6CD]">
                  Brands receive real-time insights, including data on how many
                  customers have scanned the QR code, allowing for effective
                  campaign tracking.
                </p>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-bold text-[16px]">
                  7.⁠ ⁠Social Media Campaigns
                </h1>
                <p className="font-semibold text-[16px] text-[#54C6CD]">
                  Videos and posts will be published on Free H2o socials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AdvertiseForm />
      </div>
    </div>
  );
}

export default AdvertisePage;
