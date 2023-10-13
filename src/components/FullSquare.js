// src/components/FullSquare.js
import React from "react";

const FullSquare = () => {
  return (
    <div className="mx-12 flex flex-col h-72 my-4 border rounded-xl md:h-32 lg:ml-40">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 md:flex md:flex-row">
        <div className="w-full flex justify-center items-center md:w-auto">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border-2">
            <img
              src="/static/images/logo_squezzed.svg"
              alt="Logo"
              className="mb-4 w-5/6"
            />
          </div>
        </div>
        <p className="font-bold text-gray-500 md:mb-0">
          POWERED BY SQUEZZED
        </p>
      </div>
    </div>
  );
};

export default FullSquare;
