export const showError = (message: string) => {
  const weatherSection = document.getElementById("displayWeather");

  if (weatherSection) {
    weatherSection.innerHTML = "";
  }

  const weatherText = document.createElement("p");

  weatherText.innerHTML = message;

  weatherSection?.appendChild(weatherText);
};
