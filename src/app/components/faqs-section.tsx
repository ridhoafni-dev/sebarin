"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import React, { useEffect, useState } from "react";

const FaqsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 640);

    // Create the resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-dark">
      <div className="container mx-auto max-md:px-8 max-sm:px-6 py-16">
        <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold mb-4 text-center">
          Pertanyaan Umum (FAQs)
        </h2>
        <p className="text-dark text-center max-w-2xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan penggunaan
          layanan Sebarin
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-3 gap-x-12 max-w-7xl mx-auto pt-8">
          {faqs
            .slice(0, showAll ? faqs.length : isMobile ? 6 : faqs.length)
            .map((faq, index) => (
              <div key={index}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={faq.title}>
                    <AccordionTrigger className="heading-4 font-bold text-left">
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent>{faq.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
        </div>

        {/* Show More/Less Button - Only visible on mobile */}
        {isMobile && faqs.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {showAll ? "Lebih Sedikit" : "Lebih Banyak"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqsSection;
