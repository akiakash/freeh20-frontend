import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import freH20Logo from "../assets/logo/home_logo.png";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  const navLinksStart = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    {
      name: "Advertise",
      href: "/advertise",
      current: location.pathname === "/advertise",
    },
  ];

  const navLinksEnd = [
    {
      name: "Distribute",
      href: "/distribute",
      current: location.pathname === "/distribute",
    },
    {
      name: "Contact Us",
      href: "/contactus",
      current: location.pathname === "/contactus",
    },
  ];

  return (
    <div>
      {/* Desktop View */}
      <nav className="md:block hidden bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 font-montserrat">
        <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 justify-center">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            {/* First part of the navigation links */}
            <ul className="flex space-x-4 rtl:space-x-reverse font-normal">
              {navLinksStart.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      link.current
                        ? " md:bg-transparent text-[#54C6CD] hover:text-[#54C6CD]"
                        : " hover:bg-gray-100 md:hover:bg-transparent md:hover:[#54C6CD]"
                    }`}
                    aria-current={link.current ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={freH20Logo} className="h-12" alt="Flowbite Logo" />
            </a>

            {/* Second part of the navigation links */}
            <ul className="flex space-x-4 rtl:space-x-reverse font-normal">
              {navLinksEnd.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      link.current
                        ? "md:bg-transparent text-[#54C6CD] hover:text-[#54C6CD]"
                        : " hover:bg-gray-100 md:hover:bg-transparent md:hover:[#54C6CD]"
                    }`}
                    aria-current={link.current ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden block bg-white fixed p-4 fixed w-full top-0 z-50 ">
        <div className="flex  items-center ">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center space-x-3">
              <img src={freH20Logo} className="h-12" alt="FreeH2O Logo" />
            </a>
          </div>

          {/* Hamburger button */}
          <div className="w-full">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none  flex justify-end w-full"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 bg-white left-0 w-full h-screen transform transition-transform duration-300 ease-in-out pb-20 ${
            isOpen ? "translate-y-0 mt-20 " : "-translate-y-full"
          } `}
        >
          <div className="flex flex-col p-4 space-y-4 text-center h-full items-center justify-center absolute top-0 right-0 left-0">
            <a
              href="/"
              className={`text-[30px] font-semibold ${
                location.pathname === "/"
                  ? "text-[#54C6CD]" // Active color for "Home"
                  : "text-gray-800"
              }`}
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/advertise"
              className={`text-[30px] font-semibold ${
                location.pathname === "/advertise"
                  ? "text-[#54C6CD]" // Active color for "Advertise"
                  : "text-gray-800"
              }`}
              onClick={toggleMenu}
            >
              Advertise
            </a>
            <a
              href="/distribute"
              className={`text-[30px] font-semibold ${
                location.pathname === "/distribute"
                  ? "text-[#54C6CD]" // Active color for "Distribute"
                  : "text-gray-800"
              }`}
              onClick={toggleMenu}
            >
              Distribute
            </a>
            <a
              href="/contactus"
              className={`text-[30px] font-semibold ${
                location.pathname === "/contactus"
                  ? "text-[#54C6CD]" // Active color for "Contact Us"
                  : "text-gray-800"
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
