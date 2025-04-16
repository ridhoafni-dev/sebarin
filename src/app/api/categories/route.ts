import { NextResponse } from "next/server";
import axios from "axios";
import redis from "@/lib/redis";

const CACHE_KEY = "categories";
const CACHE_DURATION = 60 * 60 * 12; // 12 hours in seconds
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  try {
    // Try to get data from Redis first
    const cachedData = await redis.get(CACHE_KEY);

    if (cachedData) {
      return NextResponse.json({
        ...JSON.parse(cachedData),
        source: "redis",
        cached: true,
      });
    }

    // If no cached data, fetch from API
    const { data } = await axios.get(`${BASE_URL}/v1/categories`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Cache the response
    await redis.setex(CACHE_KEY, CACHE_DURATION, JSON.stringify(data));

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
        message: "Failed to fetch categories",
      },
      { status: 500 }
    );
  }
}
