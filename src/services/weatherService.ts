import type {
  GeoResponse,
  OpenMeteoResponse,
} from "../models/OpenMeteoResponse";
import { get } from "./serviceBase";

// OPEN METEO WEATHER API

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,weather_code

const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export const getWeather = async (lat: number, lon: number) => {
  const response = await get<OpenMeteoResponse>(
    `${BASE_URL}latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
  );

  return response.current_units;
};

// GEO API

// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

const COORDINATES_URL = "https://geocoding-api.open-meteo.com/v1/search?";

export const getCoordinates = async (city: string) => {
  const response = await get<GeoResponse>(
    `${COORDINATES_URL}name=${encodeURIComponent(city)}`
  );

  return response.results;
};
