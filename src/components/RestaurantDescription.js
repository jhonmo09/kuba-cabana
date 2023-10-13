// src/components/RestaurantDescription.js
import React from "react";

const RestaurantDescription = () => {
  return (
    <div className="mx-10 py-8 flex flex-col lg:ml-40">
      <h2 className="text-black font-bold mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        - Description
      </h2>
      <p className="text-gray-700 text-justify sm:leading-tight">
        Immerse yourself in old-world Cuba, our 9,000-square-foot venue offers
        options for parties as small as 10 and as large as 300. Choose from our
        invitation-only private Chef&apos;s room, our Cigar Room, The Garden, or
        the main dining area for large events.
      </p>
    </div>
  );
};

export default RestaurantDescription;
