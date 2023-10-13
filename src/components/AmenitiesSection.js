// src/components/AmenitiesSection.js
import React from "react";

const amenities = [
  { icon: "/static/images/ac_icon.svg", label: "A/C" },
  { icon: "/static/images/tv_icon.svg", label: "TV Screens" },
  { icon: "/static/images/wifi_icon.svg", label: "WiFi" },
  { icon: "/static/images/sound_icon.svg", label: "Sound System" },
  { icon: "/static/images/tree_icon.svg", label: "Outdoor Space" },
  { icon: "/static/images/lamp_icon.svg", label: "Lighting" },
  { icon: "/static/images/dj_icon-black.svg", label: "Dj Booth" },
  { icon: "/static/images/wheelchair.svg", label: "Wheelchair accessible" },
];

const AmenitiesSection = () => {
  return (
    <div className="py-8 flex flex-col justify-center mx-8 md:grid lg:ml-32 lg:mr-0 lg:justify-normal">
      <h2 className="text-black font-bold mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        - Amenities
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2 lg:justify-items-stretch lg:grid-cols-2 xl:grid-cols-3">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-gray-200 text-black rounded-lg p-4 flex flex-center justify-start items-center "
          >
            <img
              src={amenity.icon}
              alt={amenity.label}
              className="w-8 h-8 mr-4"
            />
            <span className="w-min text-left md:text-lg">{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSection;
