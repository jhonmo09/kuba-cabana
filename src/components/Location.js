// src/components/LocationSection.js
import React from "react";

const LocationSection = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8146.438760027286!2d-80.33468223376457!3d25.807765472862013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9ef4a5ffd51%3A0x724d167295c5116b!2sKuba%20Cabana!5e0!3m2!1sen!2sus!4v1697167947992!5m2!1sen!2sus";
  return (
    <div className="my-8 lg:ml-32">
      <h2 className="mx-16 text-black font-bold mb-4 text-center lg:mb-8 md:text-3xl lg:text-4xl md:text-left lg:mx-0">
        - Location
      </h2>
      <div className="w-full h-72 mb-4 md:h-96">
        <iframe
          title="Location Map"
          src={mapUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <p className="mx-10 text-gray-700 px-2 text-sm md:text-xl md:border-b-4 md:mb-10 md:px-0 lg:mx-0">
        Address: Downtown Miami 142 SE 1st Ave, Miami, FL 33131
      </p>
    </div>
  );
};

export default LocationSection;
