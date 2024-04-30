"use client";

import React, { useEffect, useState } from "react";
import { WeatherData } from "@/types";
import WeatherCard from "@/components/WeatherCard";
import WeatherSearch from "@/components/WeatherSearch";
import { normalizeCityName } from "@/utils/normalize";

const DEFAULT_CITY = "Dordrecht";

const getData = (city: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;

const Weather = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(getData(city));
      const data: WeatherData = await response.json();

      if (response.status === 404) {
        setWeather(null);
        return;
      }

      localStorage.setItem(normalizeCityName(city), JSON.stringify(data));

      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(city);
    if (cachedData) {
      setWeather(JSON.parse(cachedData));
    } else {
      fetchWeather(city);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl text-white mb-4">Weather App</h1>
      <WeatherSearch
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Weather;
