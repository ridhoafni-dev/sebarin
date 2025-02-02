import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface ItemServicesProps {
  url: string;
  title: string;
  description: string;
}

const ItemServices: React.FC<ItemServicesProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl hover:shadow-xl transition">
      <Image
        src={url}
        alt={title}
        width={800}
        height={600}
        className="w-full h-auto object-cover rounded-tl-lg rounded-tr-lg 
             max-h-[400px] sm:max-h-[300px] md:max-h-[300px]"
        sizes="(max-width: 640px) 100vw, 
         (max-width: 768px) 50vw,
         (max-width: 1024px) 33vw,
         25vw"
        objectFit="cover"
        quality={90}
        priority
        loading="eager"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark mb-4">{title}</h3>
        <p className="text-dark mb-4">{description}</p>

        <p className="text-primary font-semibold mt-8 cursor-pointer hover:opacity-90">
          Pelajari Selengkapnya <FiArrowRight className="inline-block" />
        </p>
      </div>
    </div>
  );
};

export default ItemServices;
