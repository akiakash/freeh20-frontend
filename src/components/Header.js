import React from "react";

function Header() {
  const navLinksStart = [
    { name: "Home", href: "/", current: true },
    { name: "Advertise", href: "/advertise", current: false },
    { name: "Distribute", href: "#", current: false },
  ];

  const navLinksEnd = [
    { name: "Hall of Fame", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];

  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
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
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:[#54C6CD] "
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
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img src="/logo.png" className="h-8" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl font-bold whitespace-nowrap text-[#54C6CD]">
                FreeH2O
              </span>
            </a>

            {/* Second part of the navigation links */}
            <ul className="flex space-x-4 rtl:space-x-reverse  font-normal">
              {navLinksEnd.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      link.current
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
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
    </div>
  );
}

export default Header;
