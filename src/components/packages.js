import React from "react";

const packageData = [
  {
    name: "BASIC",
    price: "LKR 21500",
    description: "250 Bottles",
    teamSize: "1 developer",
    support: "6 months",
    updates: "6 months",
    features: [
      "3D Interactive Labels",
      "Static QR Code",
      "Social MediaMarketing via FREEH2O",
      "Targeted Distribution",
      "Life-time QR Validity",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "LKR 39500",
    description: "500 Bottles",
    teamSize: "3D Bottles",
    support: "24 months",
    updates: "24 months",
    features: [
      "3D Interactive Labels",
      "Static QR Code",
      "Social MediaMarketing via FREEH2O",
      "Targeted Distribution",
      "Life-time QR Validity",
    ],
  },
];

function Packages() {
  return (
    <div>
      <section className="bg-white flex">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#54C6CD] ">
              SINGLE ADVERT PACKAGES
            </h2>
            <p className="mb-5 font-light text-black sm:text-xl">
              Free H20 offers a brand new alternative to traditional
              advertising, featuring ad spaces through our bottle canvas with QR
              code Integration.
            </p>
          </div>
          <div className="flex md:flex-row gap-10 flex-col">
            {packageData.map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto max-w-[400px] w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8  "
              >
                <h3 className="mb-4 text-2xl font-semibold">{pkg.name}</h3>
                <p className="text-[#54C6CD] font-semibold sm:text-lg ">
                  {pkg.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    {pkg.price}
                  </span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="#54C6CD"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
