// src/components/Tour360Section.js
import React, { useState, useEffect } from "react";

const Tour360Section = ({ onClose, onOpen }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const streetViewUrl =
    "https://www.google.com/maps/embed?pb=!4v1697154578462!6m8!1m7!1sCAoSLEFGMVFpcE5kNkRtWWJlaWlIUEQ3bzJwaGg0NDlTNmJSX3dZbkFsdkdfSzQy!2m2!1d25.8075997!2d-80.3319745!3f322.67432283657985!4f-19.283908521716242!5f0.4000000000000002";

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleOpenForm = () => {
    onOpen();
  };

  const handleTour360Click = () => {
    toggleFullscreen();
    onClose();
  };

  const checkWindowSize = () => {
    if (window.innerWidth >= 2000) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div
      className={`my-14 sm:h-auto lg:ml-36 ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      {!isLargeScreen && (
        <div className={`${isFullscreen ? "hidden" : ""}`}>
          <h2 className="text-black font-bold mb-4 text-center md:text-left md:ml-8 lg:mb-8 md:text-3xl lg:text-4xl">
            - Tour 360°
          </h2>
          <p className="mx-10 text-gray-700 mb-4 text-center md:text-left md:ml-8">
            Take a look at our facilities on our virtual tour!
          </p>
        </div>
      )}
      <div
        className={`relative ${
          isFullscreen
            ? "h-screen rounded-xl sm:w-screen lg:w-128 xl:w-11/12"
            : "h-60 sm:h-96 md:h-128"
        }`}
      >
        <div
          className={`rounded-xl overflow-hidden ${
            isFullscreen
              ? "h-screen lg:h-128 xl:h-150 2xl:h-180"
              : "h-60 sm:h-96 md:h-128"
          }`}
        >
          <iframe
            title="Tour 360"
            width="100%"
            height="100%"
            src={streetViewUrl}
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        {!isLargeScreen && (
          <button
            className={`absolute w-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-custom text-white  rounded-full px-4 py-1 hover:opacity-100 focus:outline-none ${
              isFullscreen ? "hidden" : ""
            }`}
            onClick={handleTour360Click}
          >
            Tour 360
          </button>
        )}
        {isFullscreen && (
          <button
            className="absolute top-4 right-4 bg-transparent text-white font-bold text-2xl focus:outline-none md:top-8 md:right-16 md:text-4xl"
            onClick={() => {
              handleTour360Click();
              handleOpenForm();
            }}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Tour360Section;
