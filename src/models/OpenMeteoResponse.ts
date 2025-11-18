import type { Coordinates } from "./Coordinates";
import type { CurrentWeather } from "./CurrentWeather";

export type OpenMeteoResponse = {
  current: CurrentWeather;
};

export type GeoResponse = {
  results: Coordinates[];
};
