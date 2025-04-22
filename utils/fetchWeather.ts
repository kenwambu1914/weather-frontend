// utils/fetchWeather.ts

import { WeatherData } from "@/types/weather";

/**
 * Fetches weather data from Laravel backend.
 * @param city - City name to get weather for
 * @returns WeatherData object from the backend API
 */
export async function fetchWeather(city: string): Promise<WeatherData | null> {
  try {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);

    if (!res.ok) {
      console.error("Error fetching weather:", res.statusText);
      return null;
    }

    const data: WeatherData = await res.json();
    return data;
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}
