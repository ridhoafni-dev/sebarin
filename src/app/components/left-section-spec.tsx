import Image from "next/image";
import React, { ReactNode } from "react";

interface LeftSectionSpecProps {
  url: string;
  title: string;
  description: ReactNode;
}

const LeftSectionSpec: React.FC<LeftSectionSpecProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 max-w-[1440px]">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="w-full sm:w-1/2 relative flex items-end justify-center">
          <Image
            src={url}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto max-w-[400px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[550px]"
            sizes="(max-width: 640px) 500px, (max-width: 768px) 500px, (max-width: 1024px) 500px, 600px"
            quality={100}
            priority
            loading="eager"
            unoptimized
          />
        </div>
        <div className="w-full sm:w-1/2 place-self-center">
          <h2 className="heading-2 max-md:text-4xl max-sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {description}
        </div>
      </div>
    </div>
  );
};

export default LeftSectionSpec;
