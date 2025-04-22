// components/WeatherCard.tsx

import { WeatherData } from "@/types/weather";

type Props = {
  data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
  const { name, main, weather, wind } = data;
  const icon = weather[0]?.icon;
  const description = weather[0]?.description;

  return (
    <div className="flex justify-center min-h-screen bg-base-100">
    <div className="card bg-base-100 shadow-xl p-6">
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="capitalize">{description}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p>🌡️ Temperature: {main.temp}°C</p>
        <p>🤒 Feels Like: {main.feels_like}°C</p>
        <p>💧 Humidity: {main.humidity}%</p>
        <p>💨 Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
    </div>
  );
}
