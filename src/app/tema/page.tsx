"use client";

import { Category, DialogType, FilterOptions, Theme } from "@/types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useDialog } from "@/hooks/use-dialog";
import { FiFilter } from "react-icons/fi";

const ThemePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [prevCursor, setPrevCursor] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const dialog = useDialog();

  const fetchThemes = async (
    cursor: string | null,
    options?: FilterOptions
  ) => {
    try {
      const params: Record<string, string> = {
        limit: "100",
      };
      if (cursor) {
        params.cursor = cursor;
      }

      if (options?.categoryId) {
        params.categoryId = options.categoryId.toString();
      }
      if (options?.style && options.style !== "Semua Style") {
        params.style = options.style;
      }
      if (options?.color && options.color !== "Semua Warna") {
        params.color = options.color;
      }
      const response = await axios.get("/api/themes", { params });

      if (response.data.data) {
        const { data } = response.data;
        const themes = data.data;
        setThemes(themes);
        setNextCursor(data.next_cursor || null);
        setPrevCursor(data.prev_cursor || null);
      }
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const handleCategoryClick = async (categoryId: number) => {
    const newCategoryId = categoryId === selectedCategory ? null : categoryId;
    setSelectedCategory(newCategoryId);
    setIsLoading(true);
    await fetchThemes(null, newCategoryId);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch categories
        const categoriesResponse = await axios.get("/api/categories");
        if (categoriesResponse.data.data) {
          setCategories(categoriesResponse.data.data);
        }

        await fetchThemes(null, selectedCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const loadNext = async () => {
    if (isLoadingMore || !nextCursor) return;
    setIsLoadingMore(true);
    await fetchThemes(nextCursor);
    setIsLoadingMore(false);
  };

  const loadPrevious = async () => {
    if (isLoadingMore || !prevCursor) return;
    setIsLoadingMore(true);
    await fetchThemes(prevCursor);
    setIsLoadingMore(false);
  };

  return (
    <div className="px-8">
      {/* make background from image bg-rectangel */}

      <div
        style={{
          backgroundImage: 'url("/images/bg_rectangel.png")',
          backgroundBlendMode: "overlay",
        }}
        className="py-12"
      >
        <h1 className="text-3xl font-bold mb-4">
          <span className="bg-blue-500 text-white px-2 rounded">Ratusan</span>{" "}
          Pilihan Tema
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque diam
          porttitor blandit.
        </p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-1/6 bg-white p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Kategori</h2>
          {isLoading ? (
            <div className="animate-pulse">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-200 rounded my-2"></div>
              ))}
            </div>
          ) : (
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`p-2 cursor-pointer transition rounded-lg mt-2 ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* Content */}
        <div className="w-3/4">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">360 Tema</span>
            <div className="flex gap-2">
              <button
                className="border p-2 rounded"
                type="button"
                onClick={() =>
                  dialog.onOpen({
                    type: DialogType.FilterTheme,
                    title: "Filter Tema",
                  })
                }
              >
                <div className="flex flex-row gap-2 items-center">
                  <FiFilter />
                  <span>Filter</span>
                </div>
              </button>
              <input
                type="text"
                placeholder="Cari Tema"
                className="border p-2 rounded"
              />
            </div>
          </div>

          {/* Themes Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              [...Array(9)].map((_, i) => (
                <div
                  key={`loading-${i}`}
                  className="animate-pulse bg-gray-200 rounded-lg h-64"
                ></div>
              ))
            ) : themes && themes.length > 0 ? (
              themes.map((theme: Theme, index: number) => (
                <div key={`${theme.id}-${index}`} className="overflow-hidden">
                  <Image
                    src={theme.image_url}
                    alt={theme.name}
                    width={220}
                    height={392}
                    className="w-full object-cover rounded-lg shadow-md "
                  />
                  <div className="py-4 flex justify-between items-center">
                    <h3 className="font-semibold text-base">{theme.name}</h3>
                    {theme.is_active ? (
                      <span className="text-black bg-[#F5DB51] rounded-full px-2 font-medium">
                        {theme.is_premium ? "Premium" : "Gratis"}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-500">
                No themes found
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {!isLoading && (
            <div className="flex justify-center gap-4 mt-8">
              {prevCursor && (
                <button
                  onClick={loadPrevious}
                  disabled={isLoadingMore}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {isLoadingMore ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                      Loading...
                    </div>
                  ) : (
                    "Previous"
                  )}
                </button>
              )}

              {nextCursor && (
                <button
                  onClick={loadNext}
                  disabled={isLoadingMore}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {isLoadingMore ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Loading...
                    </div>
                  ) : (
                    "Next"
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
