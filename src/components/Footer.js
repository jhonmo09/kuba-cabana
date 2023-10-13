import React from "react";

const logoBlancoMeraki = "/static/images/kuba-logo.png";
const instagramIcon = "/static/images/instagram_icon.svg";
const facebookIcon = "/static/images/facebook_icon.svg";

const Footer = () => {
  return (
    <footer className="lg:w-full lg:bg-red-500">
      <div className="bg-[#000000] text-white py-8 lg:w-full">
        <div className="container mx-auto px-4 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:justify-items-center">
          <img
            src={logoBlancoMeraki}
            alt="Meraki-Logo"
            className="mx-auto w-28 mb-4 lg:col-span-2 lg:mx-0 lg:w-36 lg:justify-self-start lg:ml-24"
          />
          <div className="lg:border-l lg:pl-16">
            <hr className="border-white mb-4 lg:border-0" />
            <p className="text-base">Phone: +1 305-800-5822</p>
            <p className="text-base">
              Address: City Place - Doral 3450 NW 83rd Ave #140, Doral, FL 33122
            </p>
            <a href="https://merakidowntown.com" className="text-base">
              Website: https://kubamiami.com/
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center text-black py-4 lg:flex lg:justify-between lg:flex-row-reverse lg:px-20 lg:items-center">
        <div className="flex justify-center items-center space-x-4 mt-4 mb-4">
          <a href="https://www.instagram.com/kubacabanamiami/" target="_blank">
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="text-3A7DA8 h-8 w-auto"
            />
          </a>
          <a href="https://www.facebook.com/Kubacabanamiami/" target="_blank">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="text-3A7DA8 h-8 w-auto w-auto"
            />
          </a>
        </div>
        <div>
          <p className="text-base">© 2023 Kuba Kabana</p>
          <p className="text-base">POWERED BY SQUEEZZED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
