"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const HeroSection = () => {
  // Add new state for image slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = useMemo(
    () => [
      {
        title: "Pernikahan",
        image: "https://satumomen.com/themes/timeless/timeless.webp",
      },
      {
        title: "Ulang Tahun",
        image: "https://satumomen.com/themes/bunny-pastel/bunny-pastel.webp",
      },
      {
        title: "Aqiqah",
        image: "https://satumomen.com/themes/astronout/astronout.jpg",
      },
      {
        title: "Syukuran",
        image: "https://satumomen.com/themes/silaturahim/silaturahim.jpg",
      },
      {
        title: "Khitanan",
        image: "https://satumomen.com/themes/islamic-blue/islamic-blue.jpg",
      },
    ],
    []
  );

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = events[currentEventIndex].title;
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentEventIndex, events]);

  // Add useEffect for image slideshow
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [events.length]);

  return (
    <section className="px-6 py-6">
      <div className="lg:flex-row max-w-7xl mx-auto flex items-center gap-x-8 flex-col">
        <div className="md:text-left mb-8 md:mb-0 lg:flex-1">
          <div className="bg-[#139f981f] py-2 px-4 inline-block rounded-full mb-4">
            <p className="text-primary font-medium text-left">
              #1 Platform Undangan Digital
            </p>
          </div>
          <h1 className="hero-title md:text-6xl md:leading-[1.2] text-left font-bold mb-4">
            Solusi Website Undangan Digital Untuk{" "}
            <span className="animated-text-container">
              <span className="text-primary">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-left text-dark pt-2">
            Buat undangan online digital website custom dengan Satu Momen, mudah
            digunakan, dan selesai dalam hitungan menit.
          </p>
          <div className="flex gap-x-4 pt-6">
            <button className="btn-primary-sm">Pesan Sekarang</button>
            <button className="btn-primary-outline-sm">Hubungi Kami</button>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-[45%] relative h-[400px] lg:h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-[380px] lg:w-[400px] h-[400px] lg:h-[400px]">
              {events.map((event, index) => (
                <div key={index}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={600}
                    quality={100}
                    priority={index === 0}
                    className={`
                  bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-auto h-auto max-h-[400px] lg:max-h-[600px] 
                  transition-opacity duration-500 
                  rounded-xl shadow-lg object-contain
                  ${index === currentEventIndex ? "slide-in" : "slide-out"}
                `}
                  />
                  {index === currentEventIndex && (
                    <div
                      className={`
            absolute bottom-4 left-1/2 -translate-x-1/2
            bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full
            transition-opacity duration-500
            ${index === currentEventIndex ? "opacity-100" : "opacity-0"}
          `}
                    >
                      <h2 className="text-primary font-semibold text-lg">
                        {event.title}
                      </h2>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
