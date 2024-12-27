"use client";

import { useState } from "react";
import Image from "next/image";
import { imageAsset } from "@/data/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageCard = () => {
  const images = imageAsset;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="text-center text-red-500">No images available</div>;
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
      {/* Previous Button */}
      <button
        onClick={goToPrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-10">
        <FaArrowLeft size={24} />
      </button>

      <div className="relative w-full flex justify-center">
        {/* Card Gambar */}
        <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 flex flex-col items-center">
            <Image
              src={images[currentImageIndex].image}
              alt="test"
              width={400}
              height={400}
              className="mb-4"
            />
            <h2 className="text-xl font-bold text-gray-700 text-center">
              {images[currentImageIndex].name}
            </h2>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={goToNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-10">
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default ImageCard;
