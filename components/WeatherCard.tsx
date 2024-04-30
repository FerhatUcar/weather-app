import React from "react";
import { WeatherData } from "@/types";
import Image from "next/image";
import { MotionWrapper } from "@/components/MotionWrapper";
import { capitalizeFirstLetter } from "@/utils/capitalize";

const WeatherCard = ({ weather }: { weather: WeatherData | null }) => {
  return (
    <MotionWrapper>
      <div className="w-full max-w-[640px] pb-4 px-4 bg-blue-900 hover:bg-blue-900/75 transition-all text-white shadow-md rounded-lg border border-blue-950">
        {weather ? (
          <div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl">
                Weather in {weather.name}, {weather.sys.country}
              </h3>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
                width={50}
                height={50}
              />
            </div>

            <p className="flex flex-row justify-between">
              <span>Temperature:</span> <span>{weather.main.temp}°C</span>
            </p>
            <p className="flex flex-row justify-between">
              <span>Description:</span>
              <span>
                {capitalizeFirstLetter(weather.weather[0].description)}
              </span>
            </p>
            <p className="flex flex-row justify-between">
              <span>Wind Speed:</span> <span>{weather.wind.speed} m/s</span>
            </p>
          </div>
        ) : (
          <div className="mt-4">City doesn&apos;t exist</div>
        )}
      </div>
    </MotionWrapper>
  );
};

export default WeatherCard;
