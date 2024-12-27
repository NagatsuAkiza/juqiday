"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const music = new Audio("/music.mp3");
      musicRef.current = music;
      setAudio(music);
    }
  }, []);

  const togglePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      console.log("Music paused...");
    } else {
      audio.play().catch((err) => {
        console.error("Failed to play the audio:", err);
      });
      console.log("Music playing...");
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="absolute top-0 right-0 m-4">
      <button
        onClick={togglePlay}
        className="p-3 bg-white text-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
        {isPlaying ? (
          <div className="flex flex-row gap-4 justify-center items-center">
            <p>Stop Music</p>
            <FaPause size={20} className="text-green-500" />
          </div>
        ) : (
          <div className="flex flex-row gap-4 justify-center items-center">
            <p>Play Music</p>
            <FaPlay size={20} className="text-green-500" />
          </div>
        )}
      </button>
    </div>
  );
};

export default PlayMusic;
