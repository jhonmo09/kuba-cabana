// src/components/AreasSection.js
import React from "react";

const AreasSection = () => {
  return (
    <div className="mx-10 py-8 flex flex-col border-b-4 items-start gap-4 lg:ml-40">
      <h2 className="text-black font-bold mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        - Areas
      </h2>
      <div className="text-gray-700 gap-12 flex flex-col md:w-full text-sm md:text-lg">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-2 sm-8 col-span-2">
            <p className="font-bold text-inherit">Private Lounge</p>
            <div className="flex items-center gap-2">
              <img
                src="/static/images/chef-hat.svg"
                className="text-purple-500 h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Chef&apos;s Table</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/static/images/cigar.svg"
                className="text-purple-500 h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Cigar Room</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/static/images/tree_icon.svg"
                className="text-purple-500 h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Outdoor Garden</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/static/images/people_icon.svg"
                className="text-purple-500 h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Restrooms</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm-4 col-span-2 pl-2">
            <p className="font-bold text-inherit">Capacity:</p>
            <div className="flex items-center gap-4 gap-4">
              <p className="text-inherit">18</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-inherit">20</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-inherit">64</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-inherit">2 (stalls in each restroom)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-inherit">Main Room</p>
            <div className="flex items-center gap-2">
              <img
                src="/static/images/chair_icon.svg"
                className="text-purple-500 h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Main Room</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:text-start">
            <p className="font-bold text-inherit">Capacity:</p>
            <div className="flex items-center gap-4 gap-4">
              <p className="text-inherit">Seated Guests: 220</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-inherit">Standing Guests: 80</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-start md:gap-0">
          <div className="flex flex-col gap-2 md:items-start">
            <p className="font-bold text-inherit">Outdoor Garden:</p>
            <div className="flex gap-4">
              <img
                src="/static/images/tree_icon.svg"
                className="text-purple-500  h-4 w-4 mr-1 md:mr-2 md:w-8 md:h-8"
              />
              <p className="text-inherit">Total Capacity: 70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasSection;
