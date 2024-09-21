import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faRedditAlien,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="/contactus">
              <button className="mt-4 px-6 py-2 text-white rounded-full bg-[#54C6CD]">
                Contact Us
              </button>
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.tiktok.com/@free_h2o.lk?_t=8ps9StqSAn2&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/free_h2o.lk/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8">
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a
              href="/advertise"
              className="block md:inline-block md:mr-4 mb-2 md:mb-0"
            >
              Advertise
            </a>
            <a
              href="/distribute"
              className="block md:inline-block md:mr-4 mb-2 md:mb-0"
            >
              Distribute
            </a>
          </div>
          {/* <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a href="#" className="block md:inline-block md:mr-4 mb-2 md:mb-0">
              Order FreeH2O Boxes
            </a>
            <a href="#" className="block md:inline-block">
              Order FreeH2O Bottles
            </a>
          </div> */}
        </div>

        <div className="text-center">
          <p className="text-sm">
            &copy; 2024 Copyright FreeH2Ofree All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
