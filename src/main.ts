import "./style.css";
import { weatherCardHtml } from "./utils/weatherCardHtml";
import { getCoordinates, getWeather } from "./services/weatherService";
import { showError } from "./utils/createHtmlErrorMsg";
import { dynamicBackgroundColors } from "./utils/dynamicBackgroundColor";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputCity = document.getElementById("cityInput");

  let citySearch = "";

  if (inputCity) {
    citySearch = (inputCity as HTMLInputElement).value.trim();
  }

  if (!citySearch) {
    return showError("Please enter a city name");
  }

  const location = await getCoordinates(citySearch);

  if (!location) {
    return showError("City not found");
  }

  const weather = await getWeather(location.latitude, location.longitude);

  weatherCardHtml(location, weather);

  if (inputCity) {
    (inputCity as HTMLInputElement).value = "";
  }
});

dynamicBackgroundColors();
