import React, { useState, useEffect } from "react";

const AdCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
    "https://i.pinimg.com/736x/b5/4b/4a/b54b4ab9fd4b6e7a99f891fdcfb588ee.jpg",
  ];

  const visibleAdsDesktop = 3;
  const visibleAdsMobile = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex =
        window.innerWidth >= 768
          ? images.length - visibleAdsDesktop
          : images.length - visibleAdsMobile;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex =
        window.innerWidth >= 768
          ? images.length - visibleAdsDesktop
          : images.length - visibleAdsMobile;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const visibleAds =
    window.innerWidth >= 768 ? visibleAdsDesktop : visibleAdsMobile;

  return (
    <div className="relative w-full mx-auto mt-8">
      <div className="flex justify-center items-center space-x-4">
        {images
          .slice(currentIndex, currentIndex + visibleAds)
          .map((image, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-500 ${
                index === 1 ? "scale-110 z-10" : "scale-90"
              }`}
            >
              <img
                src={image}
                alt={`Advertisement ${currentIndex + index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        ›
      </button>
      <div className="flex justify-center mt-4">
        {images.slice(0, images.length - visibleAds + 1).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
