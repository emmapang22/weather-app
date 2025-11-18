import type {
  GeoResponse,
  OpenMeteoResponse,
} from "../models/OpenMeteoResponse";
import { get } from "./serviceBase";

// OPEN METEO WEATHER API
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,weather_code

// gets data from Open Meteo about the current weather
// base url
const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export const getWeather = async (lat: number, lon: number) => {
  const response = await get<OpenMeteoResponse>(
    `${BASE_URL}latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
  );

  return {
    temperature: response.current.temperature_2m,
    weatherCode: response.current.weather_code,
  };
};

// ----------------

// GEO API
// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

// gets data from Geocoding Open Meteo to find the city by searching its name
// base url
const COORDINATES_URL = "https://geocoding-api.open-meteo.com/v1/search?";

export const getCoordinates = async (city: string) => {
  const response = await get<GeoResponse>(
    `${COORDINATES_URL}name=${encodeURIComponent(city)}`
  );

  if (!response.results || response.results.length === 0) {
    return null;
  }

  return response.results[0];
};
