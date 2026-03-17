import type {
  GeoResponse,
  OpenMeteoResponse,
} from "../models/OpenMeteoResponse";
import { get } from "./serviceBase";

const OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast?";

export const getWeather = async (lat: number, lon: number) => {
  const response = await get<OpenMeteoResponse>(
    `${OPEN_METEO_URL}latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`,
  );

  return {
    temperature_2m: response.current.temperature_2m,
    weather_code: response.current.weather_code,
  };
};

const COORDINATES_URL = "https://geocoding-api.open-meteo.com/v1/search?";

export const getCoordinates = async (city: string) => {
  const response = await get<GeoResponse>(
    `${COORDINATES_URL}name=${encodeURIComponent(city)}`,
  );

  if (!response.results || response.results.length === 0) {
    return null;
  }

  return response.results[0];
};
