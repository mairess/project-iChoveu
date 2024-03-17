// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const erMessage = 'Nenhuma cidade encontrada';
  try {
    const API_URL = `https://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!TERMO_DE_BUSCA || data.length === 0) {
      throw new Error(erMessage);
    }
    return data;
  } catch (error) {
    return window.alert(error.message);
  }
};

export const getWeatherByCity = async (url) => {
  try {
    if (!url) {
      throw new Error(`Requesting error: ${erMessage}`);
    }
    const API_CITY_URL = `https://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${url}`;
    const response = await fetch(API_CITY_URL);
    const data = await response.json();
    const { location, current } = data;
    const { temp_c: temp, condition: cityCondition } = current;
    const { name, country } = location;
    const { text: condition, icon } = cityCondition;
    return { name, country, temp, condition, icon, url };
  } catch (error) {
    return window.alert(error.message);
  }
};

export const getNextSevenDaysForecast = async (url) => {
  const DIAS = 7;
  const API_NEXT_DAYS_FORECAST = `https://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${url}&days=${DIAS}`;

  const response = await fetch(API_NEXT_DAYS_FORECAST);
  const data = await response.json();
  const { forecast } = data;
  const { forecastday } = forecast;
  return forecastday.map((day) => {
    const { date, day: dayForTemp } = day;
    const { maxtemp_c: maxTemp, mintemp_c: minTemp, condition: conditionD } = dayForTemp;
    const { text: condition, icon } = conditionD;
    return { date, maxTemp, minTemp, condition, icon };
  });
};
