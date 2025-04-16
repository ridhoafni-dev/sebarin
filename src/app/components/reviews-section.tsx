"use client";

import { reviews } from "@/data";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Auto scroll function
  const autoScroll = () => {
    if (scrollContainerRef.current && !isPaused) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      const nextScrollPosition = scrollLeft + 320; // Width of one card

      // If we're at or near the end
      if (scrollLeft >= maxScroll - 10) {
        // First scroll back to start smoothly
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Normal scroll to next card
        scrollContainerRef.current.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Modified autoScroll interval
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMobile) {
      interval = setInterval(autoScroll, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, isMobile]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pause auto-scroll on hover or touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    checkScroll();
    const scrollContainer = scrollContainerRef.current;
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
    <section className="px-2 xl:px-16 py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 max-w-[1440px]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
            Apa Kata <span className="bg-primary text-white">Pelanggan</span>{" "}
            Kami
          </h2>
          <h3 className="text-dark lg:w-[70%] text-center mt-2">
            Berikut ini beberapa cerita dari pelanggan yang telah mencoba
            layanan Kami, dan masih banyak lagi cerita tentang kepuasan layanan
            kami.
          </h3>
        </div>
        <div
          className="relative pt-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all sm:hidden" // Add sm:hidden
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="
                flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-3 
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
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="max-sm:w-[320px] rounded-md bg-white border border-solid border-gray-200 p-4 shadow-sm hover:border-gray-300 transition-all">
                  <h2 className="text-dark mt-1">{review.review}</h2>
                  <div className="flex items-center justify-between gap-4 mt-5">
                    <div className="flex items-center gap-4 mt-5">
                      <Image
                        src={review.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-800">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-600">{review.remark}</p>
                      </div>
                    </div>
                    <Image
                      src="/images/quote.png"
                      alt="Quote"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all sm:hidden" // Add sm:hidden
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
