"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gweh from "@/assets/images/akuimut.png";
import gweh2 from "@/assets/images/gweh.png";

type DataType = {
  id: number;
  image: StaticImageData;
  header?: string;
  message: string;
};
// Data untuk kartu
const data: DataType[] = [
  {
    id: 1,
    image: gweh2,
    header: "Hello Juqi",
    message: "Ini hadiah dari aku!, maaf ya baru sempet buatin TvT"
  },
  {
    id: 2,
    image: gweh,
    message: "Coba klik tombol dibawah"
  }
];

const HomeComponent = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Function to go to the previous card
  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Previous Button */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3">
        <button
          onClick={goToPrevCard}
          className="p-3 bg-white text-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          <FaArrowLeft size={20} />
        </button>
      </div>

      {/* Card */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 flex flex-col items-center">
        <Image
          src={data[currentCardIndex].image}
          alt="test"
          width={400}
          height={400}
          className="mb-2"
        />
        <h1 className="text-3xl font-bold text-green-600 mb-2">{data[currentCardIndex].header}</h1>
        <p className="text-lg text-gray-700 text-center">{data[currentCardIndex].message}</p>
      </div>

      {/* Next Button */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3">
        <button
          onClick={goToNextCard}
          className="p-3 bg-white text-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
