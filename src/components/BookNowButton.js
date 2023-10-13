import React, { useState, useEffect } from "react";

const BookNowButton = ({ onClick, onButtonClick }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const windowHeight = window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + windowHeight) >= scrollHeight;

    setIsButtonVisible(!scrolledToBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2 w-5/12 p-4 flex flex-col justify-center items-center rounded-t-3xl bg-white drop-shadow-2xl lg:hidden ${
        isButtonVisible ? "" : "hidden"
      }`}
    >
      {" "}
      <button
        className="bg-gradient-custom rounded-full p-4 w-16 h-16"
        onClick={() => {
          onClick();
          onButtonClick();
        }}
      >
        <div className="flex items-center justify-center rotate-180">
          <img
            src="/static/images/arrow_icon.svg"
            className="white-icon"
            alt="arrow-icon"
          />
        </div>
      </button>
      <p className="block text-xs mt-2">Book now</p>
      <style jsx>{`
        .white-icon {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
};

export default BookNowButton;
