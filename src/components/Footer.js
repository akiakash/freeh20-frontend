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
            <h2 className="text-lg font-semibold">
              Because water should be free
            </h2>
            <p className="mt-2">
              Help us spread the word and share our movement with your friends
              and family
            </p>
            <button className="mt-4 px-6 py-2  text-white rounded-full  bg-[#54C6CD]">
              Contact Us
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faRedditAlien} className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="block md:inline-block md:mr-4]">
              Contact
            </a>
            <a href="#" className="block md:inline-block md:mr-4">
              Projects
            </a>
            <a href="#" className="block md:inline-block md:mr-4">
              Shop Apparel
            </a>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="block md:inline-block md:mr-4">
              Order FreeWater Boxes
            </a>
            <a href="#" className="block md:inline-block">
              Order FreeWater Bottles
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm">
              &copy; 2024 Copyright FreeWater All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
