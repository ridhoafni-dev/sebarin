import { NextResponse } from "next/server";
import axios from "axios";
import redis from "@/lib/redis";
import { ThemeResponse } from "@/types";

const CACHE_KEY = "themes";
const CACHE_DURATION = 60 * 60 * 12; // 12 hours in seconds
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor") || "";
    const queryString = searchParams.toString();
    const cacheKey = `${CACHE_KEY}:${queryString}`;

    // Try to get data from Redis first
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      return NextResponse.json({
        ...parsedData,
        source: "redis",
        cached: true,
      });
    }

    // If no cached data, fetch from API
    const { data } = await axios.get<ThemeResponse>(
      `${BASE_URL}/v1/products/websites`,
      {
        params: {
          limit: searchParams.get("limit") || "100",
          cursor,
          q: searchParams.get("q") || "",
          color: searchParams.get("color") || "",
          style: searchParams.get("style") || "",
          categoryId: searchParams.get("categoryId") || "",
          excludeCategoryId: searchParams.get("excludeCategoryId") || "",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // Cache the response with cursor-specific key
    await redis.setex(cacheKey, CACHE_DURATION, JSON.stringify(data));

    return NextResponse.json({
      ...data,
      source: "api",
      cached: false,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch themes",
      },
      { status: 500 }
    );
  }
}
