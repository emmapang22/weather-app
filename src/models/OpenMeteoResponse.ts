import type { Country } from "./Country";
import type { CurrentWeather } from "./CurrentWeather";

export type OpenMeteoResponse = {
  current_units: CurrentWeather[];
};

export type GeoResponse = {
  results: Country[];
};
