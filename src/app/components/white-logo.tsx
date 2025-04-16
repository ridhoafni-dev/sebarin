import Image from "next/image";
import React from "react";

interface WhiteLogoProps {
  className?: string;
}

const WhiteLogo: React.FC<WhiteLogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Image
        src="/images/white-logo.png"
        alt="logo"
        width={50}
        height={25} // Maintaining 2:1 aspect ratio
        className="w-[35px] h-auto object-contain"
      />
      <h2 className="text-white font-semibold text-lg">Sebarin</h2>
    </div>
  );
};

export default WhiteLogo;
