import type { Coordinates } from "../models/Coordinates";
import type { CurrentWeather } from "../models/CurrentWeather";

export const createHtml = (location: Coordinates, weather: CurrentWeather) => {
  const weatherSection = document.getElementById(
    "displayWeather",
  ) as HTMLElement;

  if (weatherSection) {
    weatherSection.innerHTML = "";
  }

  const weatherContainer = document.createElement("div");
  const cityTitle = document.createElement("h3");
  const temperatureText = document.createElement("p");
  const weatherCode = document.createElement("p");

  cityTitle.innerHTML = `${location.name}, ${location.country}`;
  temperatureText.innerHTML = `Temperature: ${weather.temperature_2m}°C`;
  weatherCode.innerHTML = `Weather code: ${weather.weather_code}`;

  weatherSection?.appendChild(weatherContainer);
  weatherContainer.appendChild(cityTitle);
  weatherContainer.appendChild(temperatureText);
  weatherContainer.appendChild(weatherCode);
};
