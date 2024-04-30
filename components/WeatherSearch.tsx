import React, { Dispatch, SetStateAction } from "react";

type WeatherSearchProps = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  fetchWeather: (city: string) => Promise<void>;
};

const WeatherSearch = ({
  city,
  setCity,
  fetchWeather,
}: WeatherSearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form className="max-w-[640px] flex flex-col md:flex-row gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
        className="w-full bg-zinc-800 border-2 border-zinc-500 text-white p-2 rounded-md"
      />
      <button className="rounded bg-amber-600 hover:bg-amber-700 px-4 py-2 transition-all" type="submit">Search</button>
    </form>
  );
};

export default WeatherSearch;
