import { payments } from "@/data";
import Image from "next/image";
import React from "react";

const PaymentsSection = () => {
  return (
    <section className="px-2 xl:px-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 max-w-[1440px]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
            Beragam Pilihan Metode{" "}
            <span className="bg-primary text-white">Pembayaran</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-5xl mx-auto mt-8">
          {/* First row - 6 items */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {payments.slice(0, 6).map((payment, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="rounded-md bg-white border border-solid border-gray-200 p-3 shadow-sm hover:border-gray-300 transition-all w-[150px] h-[100px] flex items-center justify-center">
                    <Image
                      src={payment.url}
                      alt="Payment Method"
                      width={120}
                      height={70}
                      className="w-full h-full object-contain p-4"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - 5 items */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {payments.slice(6, 11).map((payment, index) => (
                <div
                  key={index + 6}
                  className="flex items-center justify-center"
                >
                  <div className="rounded-md bg-white border border-solid border-gray-200 p-3 shadow-sm hover:border-gray-300 transition-all w-[150px] h-[100px] flex items-center justify-center">
                    <Image
                      src={payment.url}
                      alt="Payment Method"
                      width={120}
                      height={70}
                      className="w-full h-full object-contain p-4"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
