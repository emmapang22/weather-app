export function showError(message: string) {
  const weatherSection = document.getElementById("displayWeather");

  if (weatherSection) {
    weatherSection.innerHTML = "";
  }

  const weatherText = document.createElement("p");

  weatherText.innerHTML = message;

  weatherSection?.appendChild(weatherText);
}

export function createHtml(
  city: string,
  country: string,
  temperature: number,
  code: number
) {
  const weatherSection = document.getElementById(
    "displayWeather"
  ) as HTMLElement;

  if (weatherSection) {
    weatherSection.innerHTML = "";
  }

  const weatherContainer = document.createElement("div");
  const cityTitle = document.createElement("h3");
  const temperatureText = document.createElement("p");
  const weatherCode = document.createElement("p");

  cityTitle.innerHTML = `${city}, ${country}`;
  temperatureText.innerHTML = `Temperature: ${temperature}°C`;
  weatherCode.innerHTML = `Weather code: ${code}`;

  weatherSection?.appendChild(weatherContainer);
  weatherContainer.appendChild(cityTitle);
  weatherContainer.appendChild(temperatureText);
  weatherContainer.appendChild(weatherCode);
}
