import type { Coordinates } from "../models/Coordinates";
import type { CurrentWeather } from "../models/CurrentWeather";
import { getWeatherCondition } from "./getWeatherCondition";

export const createHtml = (location: Coordinates, weather: CurrentWeather) => {
  const weatherSection = document.getElementById(
    "displayWeather",
  ) as HTMLElement;

  if (weatherSection) {
    weatherSection.innerHTML = "";
  }

  const weatherContainer = document.createElement("div");
  weatherContainer.className = "bg-black/50 py-5 px-10 rounded w-sm";

  const cityTitle = document.createElement("h3");
  cityTitle.className = "text-xl font-bold";
  const temperatureText = document.createElement("p");
  const weatherCode = document.createElement("p");

  cityTitle.innerHTML = `${location.name}, ${location.country}`;
  temperatureText.innerHTML = `Temperature: ${weather.temperature_2m}°C`;

  const weatherCondition = getWeatherCondition(weather.weather_code);

  weatherCode.innerHTML = `Weather condition: ${weatherCondition}`;

  weatherContainer.append(cityTitle, temperatureText, weatherCode);
  weatherSection?.appendChild(weatherContainer);
};
