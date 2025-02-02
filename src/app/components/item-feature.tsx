import React from "react";

interface ItemFeatureProps {
  title: string;
}

const ItemFeature: React.FC<ItemFeatureProps> = ({ title }) => {
  return (
    <div key={title} className="flex flex-row gap-x-2">
      <svg
        width="24"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".3"
          d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          fill="#00B1A9"
          stroke="#00B1A9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="m9 12.375 2 2 4-4"
          stroke="#00B1A9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <p className="text-dark">{title}</p>
    </div>
  );
};

export default ItemFeature;
