import React from "react";
import { useLocation } from "react-router-dom";
import freH20Logo from "../assets/logo/home_logo.png";

function Header() {
  const location = useLocation();

  const getBreadcrumb = () => {
    if (location.pathname === "/") {
      return "Home";
    } else if (location.pathname === "/advertise") {
      return "Home > Advertise";
    } else if (location.pathname === "/distribute") {
      return "Home > Distribute";
    } else if (location.pathname === "/hall-of-fame") {
      return "Home > Hall of Fame";
    } else if (location.pathname === "/faq") {
      return "Home > FAQ";
    } else if (location.pathname === "/contact") {
      return "Home > Contact Us";
    } else {
      return "Home";
    }
  };

  const navLinksStart = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    {
      name: "Advertise",
      href: "/advertise",
      current: location.pathname === "/advertise",
    },
    {
      name: "Distribute",
      href: "/distribute",
      current: location.pathname === "/distribute",
    },
  ];

  const navLinksEnd = [
    {
      name: "Hall of Fame",
      href: "/hall-of-fame",
      current: location.pathname === "/hall-of-fame",
    },
    { name: "FAQ", href: "/faq", current: location.pathname === "/faq" },
    {
      name: "Contact Us",
      href: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 font-montserrat">
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
                        ? "bg-blue-700 md:bg-transparent md:text-[#54C6CD] hover:text-[#54C6CD]"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:[#54C6CD]"
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
              <img src={freH20Logo} className="h-8" alt="Flowbite Logo" />
              {/* <span className="self-center text-2xl font-bold whitespace-nowrap text-[#54C6CD]">
                FreeH2O
              </span> */}
            </a>

            {/* Second part of the navigation links */}
            <ul className="flex space-x-4 rtl:space-x-reverse font-normal">
              {navLinksEnd.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      link.current
                        ? "bg-blue-700 md:bg-transparent md:text-[#54C6CD] hover:text-[#54C6CD]"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:[#54C6CD]"
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
      {/* Breadcrumb/Heading */}
      <div className="mt-20 pl-36">
        <h1 className="text-sm sm:text-l font-semibold text-gray-800 break-words">
          {getBreadcrumb()}
        </h1>
      </div>
    </div>
  );
}

export default Header;
