"use client";

import { steps } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StepsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      // Add small threshold to account for rounding errors
      const maxScroll = scrollWidth - clientWidth - 1;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScroll);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollContainer = scrollContainerRef.current;

    // Check on scroll
    scrollContainer?.addEventListener("scroll", checkScroll);

    // Add resize event listener
    const handleResize = () => {
      // Add setTimeout to ensure DOM has updated
      setTimeout(checkScroll, 100);
    };
    window.addEventListener("resize", handleResize);

    // Trigger initial check after content loads
    setTimeout(checkScroll, 100);

    // Cleanup function
    return () => {
      scrollContainer?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="xl:mx-20 px-2 sm:px-2 md:px-2 lg:px-2 xl:px-16 py-16 bg-primary rounded-tr-[80px]">
      <div className="container mx-auto max-md:px-8 max-sm:px-6 text-white">
        <div className="lg:w-[70%]">
          <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold mb-4">
            Kini Kamu bisa buat undangan digital hanya dengan 3 langkah mudah
          </h2>
          <div className="font-medium-white pt-3">
            Aplikasi undangan digital website online yang didesain khusus
            sehingga kamu dapat menggunakannya dengan mudah cukup 3 langkah
            sederhana untuk mewujudkan undangan website impian kamu.
          </div>
        </div>

        <div className="relative pt-5">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="
            flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 
            gap-4 sm:gap-6 md:gap-8 lg:gap-10 
            max-w-7xl mx-auto 
            px-4 sm:px-6 lg:px-8
            pb-4 md:pb-0
            snap-x snap-mandatory
             [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
    overflow-y-hidden
          "
          >
            {steps.map((step, index) => (
              <div key={index} className="snap-center min-w-[300px] md:min-w-0">
                <div className="rounded-full bg-[#FFEFE8] size-11 flex items-center justify-center">
                  <p className="font-bold text-[#FE5800] text-2xl">
                    {index + 1}
                  </p>
                </div>
                <h2 className="heading-4 font-bold mt-1">{step.title}</h2>
                <p className="text-medium-white mt-1">{step.description}</p>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
