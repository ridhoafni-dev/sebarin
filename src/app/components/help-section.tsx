import React from "react";

const HelpSection = () => {
  return (
    <section className="bg-soft py-16">
      <div className="container mx-auto max-md:px-8 max-sm:px-6 text-center py-12">
        <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Butuh bantuan atau{" "}
          <span className="bg-primary text-white">konsultasi</span>?
        </h2>
        <p className="text-dark lg:w-[70%] mx-auto">
          Kami siap membantu kamu dalam mewujudkan undangan digital impian kamu.
          Jangan ragu untuk menghubungi kami.
        </p>
        <button className="btn-primary mt-6">Hubungi Kami</button>
      </div>
    </section>
  );
};

export default HelpSection;
