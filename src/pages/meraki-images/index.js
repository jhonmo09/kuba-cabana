import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import { FiX } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageList = [
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20home%2F1D3A5832.jpg?alt=media&token=5fe7733a-65b5-4e24-811c-cd1585ab3602&_gl=1*1s425p0*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNDc4MC4wLjAuMA"],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F1D3A7757.jpg?alt=media&token=9ed78610-1e51-4123-9c7f-6626fc612976&_gl=1*uhwj27*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTg3MS4wLjAuMA..", "https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F1D3A9732.jpg?alt=media&token=f10dc72d-13bf-4280-8c2c-dbf55cb848db&_gl=1*bj5cud*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTkwNS4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F1D3A9885.jpg?alt=media&token=4eba2f95-a37e-40a9-8b61-54f89df836ab&_gl=1*1mnqw39*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTkyNS4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F23736158_769668303234822_6242702172807360611_o.jpg?alt=media&token=9761924a-419e-4a41-8666-cbc1b2a13cfd&_gl=1*9wn1gu*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTk0Ni4wLjAuMA..", "https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F29792638_838934809641504_8224874943209275392_o.jpg?alt=media&token=ce12ae35-c4fd-437b-a64e-1b640a9a389a&_gl=1*1uhsljf*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTk2Ni4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2FDSC_6671%20(1).jpg?alt=media&token=1b6e5eb6-39be-4f3e-b69a-7515c7d7e367&_gl=1*lzqspi*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNTk4Ni4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2FDSC_6675%20(1).jpg?alt=media&token=1d790cce-4e07-43ef-9653-8a59417e1e5d&_gl=1*1avajxr*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNjAwMy4wLjAuMA..", "https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2FSalonilast-68.jpg?alt=media&token=0199e237-5358-445f-8bcf-d971ed6d26de&_gl=1*i7w2d1*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNjAyNy4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2Fmci%20Nov-1491.jpg?alt=media&token=fc4e0493-5751-435c-b905-96e9b9d78243&_gl=1*bvok01*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNjA0OC4wLjAuMA.."],
    ["https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2Fsaloni-10.jpg?alt=media&token=c6da170c-6282-4ec6-8c5c-675b1ea9dc64&_gl=1*7qz8ql*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNjA2Ny4wLjAuMA..", "https://firebasestorage.googleapis.com/v0/b/squeezzed-fa161.appspot.com/o/imagenes-foto_restaurante%2Fcomprimidas%20show%20all%2F1D3A8848.jpg?alt=media&token=a16821a6-02e9-463a-aeb3-c249460a7905&_gl=1*78br5n*_ga*MTMwOTkyNjgyMS4xNjgyMzUyMzAz*_ga_CW55HF8NVT*MTY4NTUwNDUwOS40LjEuMTY4NTUwNjIwMS4wLjAuMA.."]
];

const Index = () => {
    const router = useRouter(); 
    const [showCarousel, setShowCarousel] = useState(false);
    const [initialImage, setInitialImage] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleCloseClick = () => {
        router.push('/meraki-downtown');
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
                    <img className="rotate-90" src="/static/images/arrow_icon.svg" alt="arrow-icon" />
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img className="w-5 h-5" src="/static/images/share_icon.png" alt="" />
                        <a href="">share</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 sm:px-20 md:px-24 lg:px-36 xl:px-40 2xl:px-96'>
            {imageList.map((row, rowIndex) => (
                <div key={rowIndex} className='flex gap-4 cursor-pointer'>
                    {row.map((image, index) => {
                        const imageIndex = imageList.slice(0, rowIndex).reduce((acc, row) => acc + row.length, 0) + index;
                        return (
                            <div 
                                key={index} 
                                onClick={() => handleImageClick(imageIndex)}
                                onMouseEnter={() => setHoveredImage(imageIndex)}
                                onMouseLeave={() => setHoveredImage(null)}
                                className={`transition-all duration-300 w-full ${hoveredImage !== null && hoveredImage !== imageIndex ? "opacity-50" : ""}`}
                            >
                                <img className='object-cover	h-full w-full' src={image} alt="" />
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
                    <Carousel
                        showThumbs={false}
                        selectedItem={initialImage}
                    >
                        {flatImageList.map((image, index) => (
                            <div key={index} className="flex justify-center items-center h-full">
                            <img className={`carousel-image object-contain  mx-auto my-auto`} src={image} alt="" />
                        </div>
                        
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    )
}

export default Index

