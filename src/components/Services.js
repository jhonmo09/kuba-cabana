import React from "react";

const cleaningIcon = "/static/images/cleaning_icon.svg";
const cateringIcon = "/static/images/catering_icon.svg";
const serviceIcon = "/static/images/service_icon.svg";
const dj = "/static/images/dj_icon.svg";
const musicIcon = "/static/images/music_icon.svg";
const cameraIcon = "/static/images/photo_icon.svg";
const balloonIcon = "/static/images/balloons_icon.svg";
const wineIcon = "/static/images/wine_icon.svg";
const cakeIcon = "/static/images/cake_icon.svg";

const includedServices = [
  { icon: cleaningIcon, title: "Cleaning" },
  { icon: cateringIcon, title: "Catering" },
  { icon: serviceIcon, title: "Service" },
  { icon: balloonIcon, title: "Decor" },
];

const addons = [
  { icon: dj, title: "DJ" },
  { icon: musicIcon, title: "Live Music" },
  { icon: cameraIcon, title: "Photo and Video" },
  { icon: wineIcon, title: "Corkage Fee $50" },
  { icon: cakeIcon, title: "Cake Fee $3 per person" },
];

const Services = () => {
  return (
    <div className="bg-gradient-custom rounded-lg p-8 flex flex-col lg:ml-28 lg:px-6">
      <h2 className="text-white text-3xl mb-4">Services</h2>
      <div className="flex flex-col md:w-full">
        <h3 className="text-white text-xl mb-4">Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid md:w-full md:gap-24 lg:gap-2">
          {includedServices.map((service, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="ml-0 mb-2 max-w-14"
              />
              <p className="text-white">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:w-full mt-8">
        <h3 className="text-white text-xl mb-4">Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid md:w-full md:gap-24 lg:gap-2">
          {addons.map((addon, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={addon.icon}
                alt={addon.title}
                className="ml-0 mb-2 max-w-14"
              />
              <p className="text-white">{addon.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
