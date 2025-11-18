import { createHtml, showError } from "./htmlUtils";
import { getCoordinates, getWeather } from "./services/weatherService";
import "./style.css";

// finds the form with id searchForm and adds a click event to it
document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputCity = document.getElementById("cityInput");

  let citySearch = "";

  if (inputCity) {
    citySearch = (inputCity as HTMLInputElement).value.trim(); // removes spaces from the start and end of the string
  } else {
    showError("Please enter a city name."); // this message will show if there's nothing in the input field
    return;
  }

  const location = await getCoordinates(citySearch);
  if (!location) {
    showError("City not found."); // this message will show if the location is not found
    return;
  }

  const weather = await getWeather(location.latitude, location.longitude);

  createHtml(
    location.name,
    location.country,
    weather.temperature,
    weather.weatherCode
  );

  if (inputCity) {
    (inputCity as HTMLInputElement).value = "";
  }
});
