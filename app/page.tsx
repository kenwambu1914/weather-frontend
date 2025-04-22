// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/utils/fetchWeather";
import { WeatherData } from "@/types/weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Toronto");
  const [isMounted, setIsMounted] = useState(false);

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  useEffect(() => {
    async function getWeather() {
      setLoading(true);
      setIsMounted(true);
      const data = await fetchWeather(city);
      setWeather(data);
      setLoading(false);
    }

    getWeather();
  }, [city]);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
      <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center text-lg">Loading weather...</p>}
        {!loading && weather && <WeatherCard data={weather} />}
        {!loading && !weather && (
          <p className="text-center text-red-500">
            Could not fetch weather data.
          </p>
        )}
      </div>
    </main>
  );
}
