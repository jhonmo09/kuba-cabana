// src/components/Header.js
import React, { useState, useEffect } from "react";

const Header = ({ onSearch }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  return (
    <header className="h-auto py-4 md:h-40">
      <div className="mx-auto h-36 p-2 flex flex-col justify-center gap-4 items-center sm:flex-row sm:p-6 sm:gap-12 md:gap-32 lg:gap-36 xl:gap-40 2xl:gap-96">
        <div className="">
          {/* Reemplace 'logo.png' con el nombre de archivo de su imagen de logo. */}
          <img
            src="/static/images/kuba-logo.png"
            alt="Logo"
            className="w-24 sm:w-20 md:w-24 lg:w-32 shadow-xl"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search"
              value={localSearchTerm}
              onChange={(e) => {
                setLocalSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full px-3 py-2 pl-14 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg max-w-4xl"
            />

            <img
              src="/static/images/search_icon.svg"
              alt="search"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
