import { createHtml } from "./utils/htmlUtils";
import { getCoordinates, getWeather } from "./services/weatherService";
import "./style.css";
import { showError } from "./utils/createHtmlErrorMsg";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputCity = document.getElementById("cityInput");

  let citySearch = "";

  if (inputCity) {
    citySearch = (inputCity as HTMLInputElement).value.trim();
  }

  if (!citySearch) {
    showError("Please enter a city name.");
    return;
  }

  const location = await getCoordinates(citySearch);

  if (!location) {
    showError("City not found.");
    return;
  }

  const weather = await getWeather(location.latitude, location.longitude);

  createHtml(location, weather);

  if (inputCity) {
    (inputCity as HTMLInputElement).value = "";
  }
});
