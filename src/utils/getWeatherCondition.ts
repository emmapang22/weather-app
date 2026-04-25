export const getWeatherCondition = (weatherCode: number) => {
  let weatherCondition = "";

  switch (weatherCode) {
    case 0:
      weatherCondition = `Clear <i class="fa-solid fa-sun" style="color: #FCC74C;"></i>`;
      break;
    case 1:
      weatherCondition = `Mostly clear <i class="fa-solid fa-cloud-sun"></i>`;
      break;
    case 2:
      weatherCondition = `Partly cloudy <i class="fa-solid fa-cloud-sun"></i>`;
      break;
    case 3:
      weatherCondition = `Overcast <i class="fa-solid fa-cloud"></i>`;
      break;
    case 45:
      weatherCondition = `Foggy <i class="fa-solid fa-smog"></i>`;
      break;
    case 48:
      weatherCondition = `Icy foggy <i class="fa-solid fa-cloud"></i>`;
      break;
    case 51:
      weatherCondition = `Light drizzle <i class="fa-solid fa-cloud-rain"></i>`;
      break;
    case 53:
      weatherCondition = `Light drizzle <i class="fa-solid fa-cloud-rain"></i>`;
      break;
    case 55:
      weatherCondition = `Heavy drizzle <i class="fa-solid fa-cloud-rain"></i>`;
      break;
    case 80:
      weatherCondition = `Light showers <i class="fa-solid fa-cloud-rain"></i>`;
      break;
    case 81:
      weatherCondition = `Showers <i class="fa-solid fa-cloud-rain"></i>`;
      break;
    case 82:
      weatherCondition = `Heavy showers <i class="fa-solid fa-cloud-showers-heavy"></i>`;
      break;
    case 61:
      weatherCondition = `Light rain <i class="fa-solid fa-cloud-showers-heavy"></i>`;
      break;
    case 63:
      weatherCondition = `Rain <i class="fa-solid fa-cloud-showers-heavy"></i>`;
      break;
    case 65:
      weatherCondition = `Heavy rain <i class="fa-solid fa-cloud-showers-heavy"></i>`;
      break;
    case 56:
      weatherCondition = `Light icy drizzle <i class="fa-solid fa-cloud-rain"></i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 57:
      weatherCondition = `Icy drizzle <i class="fa-solid fa-cloud-rain"></i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 66:
      weatherCondition = `Light icy rain <i class="fa-solid fa-cloud-showers-heavy"></i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 67:
      weatherCondition = `Icy rain <i class="fa-solid fa-cloud-showers-heavy"></i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 77:
      weatherCondition = `Snow grains </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 85:
      weatherCondition = `Light snow showers </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 86:
      weatherCondition = `Snow showers </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 71:
      weatherCondition = `Light snow </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 73:
      weatherCondition = `Snow </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 75:
      weatherCondition = `Heavy snow </i><i class="fa-solid fa-snowflake"></i>`;
      break;
    case 95:
      weatherCondition = `Thunderstorm <i class="fa-solid fa-cloud-bolt"></i>`;
      break;
    case 96:
      weatherCondition = `Thunderstorm with light hail <i class="fa-solid fa-cloud-bolt"></i>`;
      break;
    case 99:
      weatherCondition = `Thunderstorm with hail <i class="fa-solid fa-cloud-bolt"></i>`;
      break;
  }

  return weatherCondition;
};
