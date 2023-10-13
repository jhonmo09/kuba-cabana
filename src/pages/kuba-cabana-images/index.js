import React, { useState } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import { FiX } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageList = [
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A0142.jpeg?alt=media&token=b6775379-d556-4bf0-b238-af32bacca706",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A2890.jpg?alt=media&token=03fa9549-7a9c-47b4-8256-e8191e2359c5",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A5291.jpg?alt=media&token=2ee12635-00a3-486e-87d9-2ca07a126550",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A2199.jpg?alt=media&token=e8cec5d8-a4d7-462d-b02f-3bab7a420f90",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A0012.jpg?alt=media&token=911b82ad-c9c4-4129-9e05-b1785b22091c",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A0096.jpg?alt=media&token=5c6ef6ca-990c-4e59-8a50-ace225312e53",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A0115.jpg?alt=media&token=53b7d89e-0b18-4539-b601-b8e7203d5814",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A0150.jpg?alt=media&token=eb687395-085b-4e18-9e4c-92db0fc2ea96",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A1139.jpg?alt=media&token=972790c8-4873-4b21-8d48-b56e726deb18",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A2518.jpg?alt=media&token=944942dc-acfb-44af-9d2f-eed6336e49ce",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A3906.jpg?alt=media&token=67671013-265a-42d2-b7af-78d9b877ec15",
    "https://firebasestorage.googleapis.com/v0/b/squeezzed-kuba-cabana.appspot.com/o/imagenes%2F1D3A3923.jpg?alt=media&token=2342a34f-a856-4d96-96b4-0f642754122b",
  ],
];

const Index = () => {
  const router = useRouter();
  const [showCarousel, setShowCarousel] = useState(false);
  const [initialImage, setInitialImage] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleCloseClick = () => {
    router.push("/kuba-cabana");
  };

  const handleImageClick = (imageIndex) => {
    setShowCarousel(true);
    setInitialImage(imageIndex);
  };

  const flatImageList = imageList.flat();

  return (
    <div className="flex flex-col gap-2 z-50">
      <div className="flex justify-between items-center sm:px-20 md:px-24 lg:px-36 xl:px-40 2xl:px-96 py-8">
        <div onClick={handleCloseClick} className="cursor-pointer">
          <img
            className="rotate-180"
            src="/static/images/chevron-right.svg"
            alt="arrow-icon"
          />
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              className="w-5 h-5"
              src="/static/images/share_icon.png"
              alt=""
            />
            <a href="">share</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:px-20 md:px-24 lg:px-36 xl:px-40 2xl:px-96">
        {imageList.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 cursor-pointer">
            {row.map((image, index) => {
              const imageIndex =
                imageList
                  .slice(0, rowIndex)
                  .reduce((acc, row) => acc + row.length, 0) + index;
              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(imageIndex)}
                  onMouseEnter={() => setHoveredImage(imageIndex)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`transition-all duration-300 w-full ${
                    hoveredImage !== null && hoveredImage !== imageIndex
                      ? "opacity-50"
                      : ""
                  }`}
                >
                  <img
                    className="object-cover	h-full w-full"
                    src={image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {showCarousel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 lg:p-48 2xl:p-80">
          <button
            onClick={() => setShowCarousel(false)}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
          >
            <FiX size={24} />
          </button>
          <Carousel showThumbs={false} selectedItem={initialImage}>
            {flatImageList.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full"
              >
                <img
                  className={`carousel-image object-contain  mx-auto my-auto`}
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Index;
