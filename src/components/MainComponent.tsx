"use client";

import { useState } from "react";
import HomeComponent from "@/components/HomeComponent";
import ImageCard from "@/components/ImageCard";

const MainComponent = () => {
  const [active, setActive] = useState<"home" | "gallery">("home");

  const switchComponent = (components: "home" | "gallery") => {
    setActive(components);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-6">
        {/* Card Container */}
        {active === "home" && <HomeComponent />}
        {active === "gallery" && <ImageCard />}
      </div>

      {/* Toggle Gallery and Home */}
      <button
        onClick={() => switchComponent(active === "home" ? "gallery" : "home")}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 mt-4">
        {active === "home" ? "Klik Aku" : "Kembali"}
      </button>
    </div>
  );
};

export default MainComponent;
