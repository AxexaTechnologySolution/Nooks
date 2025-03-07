import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const dummyImages = [
    "https://jennakateathome.com/wp-content/uploads/2021/03/breakfast-nook-ideas4.jpg",
    "https://www.blesserhouse.com/wp-content/uploads/2022/03/Allison-Elefante-Photo.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/6/25/1/IO_Genna-Margolis_Washington-Ave_5.jpg.rend.hgtvcom.1280.1280.suffix/1529954688327.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === dummyImages.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="overflow-hidden md:h-screen w-full relative">
      {/* Carousel Section */}
      <div className=" w-full sm:h-[60vh] h-[50vh] md:h-full">
        <img
          src={dummyImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Text and content over the image */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 z-10 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          Furnish Effortlessly <span className="text-[#3eae94]">with Nooks</span>
        </h1>
        <h2 className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
          Transform your space with our wide range of furniture solutions.
        </h2>
        <Link to={"/institutional-products/aUEqZwVPPzkOBhQwVt6X"} className="inline-block mt-8">
          <div className="flex items-center w-fit space-x-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-xl">
            <span>Products</span>
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
