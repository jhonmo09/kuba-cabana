import React, { useState } from "react";

const ParkingTransportation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-10 mt-12 py-8 lg:ml-28">
      <div className="flex justify-between items-center border-b border-black">
        <h2 className="text-black md:text-3xl">
          Parking & Transportation Options
        </h2>
        <button
          className={`transform transition-transform duration-300 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/static/images/chevron-right.svg"
            alt="Toggle arrow"
            className="w-6 h-6"
          />
        </button>
      </div>
      {isOpen && (
        <div className="border border-gray-300 rounded-lg p-4 mt-4">
          <div className="mb-4">
            <h3 className="font-bold">Parking options</h3>
            <p>Parking Lot on site</p>
            <p>Valet Parking</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingTransportation;
