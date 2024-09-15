import React, { useState, useEffect } from 'react';
import img1 from "@assets/background1.jpg";
import img2 from "@assets/background2.avif";
import img3 from "@assets/background3.jpg";
const IntroLanding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [img1, img2, img3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change the slide every 2 seconds

        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <div className="relative w-full h-screen sm:h-screen">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Background"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 fade' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='relative h-full flex flex-col justify-center items-center gap-10'>
                <h1 className='text-white text-3xl font-bold text-center'>Characters Illustrations Restaurant</h1>
                <h2 className='text-gray-100 text-2xl'>Flavors & Frames
                </h2>
            </div>
        </div>
    );
};

export default IntroLanding;
