import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:flex-row max-w-7xl mx-auto flex items-center gap-x-8 flex-col-reverse">
      <div className="flex justify-center lg:w-[45%] mt-6">
        <Image
          src="https://satumomen.com/images/aplikasi-undangan-digital-website.webp"
          alt="Phone Preview"
          width={400}
          height={600}
          quality={100}
          objectFit="cover"
          className="w-auto"
          priority
          loading="eager"
          unoptimized
        />
      </div>
      <div className="text-center md:text-left mb-8 md:mb-0 lg:flex-1">
        <h1 className="hero-title md:text-6xl md:leading-[1.2] text-left font-bold mb-4">
          Buat Undangan Online Digital Website Untuk Launching
        </h1>
        <p className="text-lg md:text-xl mb-6 text-left">
          Buat undangan online digital website custom dengan Satu Momen, mudah
          digunakan, dan selesai dalam hitungan menit.
        </p>
        <button className="btn-dark max-sm:w-full">
          Tanya-Tanya Dulu Yuk
          <FaArrowRight className="inline-block font-bold ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
