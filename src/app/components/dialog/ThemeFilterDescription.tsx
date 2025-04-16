import { COLORS, STYLES } from "@/data";
import React, { useState } from "react";

export interface Style {
  title: string;
}

export interface Color {
  title: string;
}

interface ThemeFilterDescriptionProps {
  styles: Style[];
  colors: Color[];
  callback: () => void;
}

const ThemeFilterDescription: React.FC<ThemeFilterDescriptionProps> = ({
  styles,
  colors,
  callback,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<string>("Semua Style");
  const [selectedColor, setSelectedColor] = useState<string>("Semua Warna");

  const handleFilter = () => {
    callback();
  };

  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-4 mt-4">
          <span className="font-semibold"># Styles</span>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((style, index) => (
              <button
                key={index}
                onClick={() => setSelectedStyle(style.title)}
                className={`rounded-md px-4 py-2 transition-colors ${
                  selectedStyle === style.title
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {style.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-semibold"># Warna</h1>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color.title)}
                className={`rounded-md px-4 py-2 transition-colors ${
                  selectedColor === color.title
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {color.title}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button
          onClick={handleFilter}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Terapkan Filter
        </button>
      </div>
    </div>
  );
};

export default ThemeFilterDescription;
