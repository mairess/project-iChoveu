// Remova os comentários a medida que for implementando as funções

export const searchCities = async (TERMO_DE_BUSCA) => {
  const erMessage = 'Nenhuma cidade encontrada';
  try {
    const TOKEN = 'd50ff4be4f7f485ea18235637230708';
    const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;
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

export const getWeatherByCity = async (URL_CIDADE) => {
  try {
    if (!URL_CIDADE) {
      throw new Error(`Requesting error: ${erMessage}`);
    }
    const TOKEN = 'd50ff4be4f7f485ea18235637230708';
    const API_CITY_URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`;
    const response = await fetch(API_CITY_URL);
    const data = await response.json();
    const { current } = data;
    const { temp_c: temp, condition: cityCondition } = current;
    const { text: condition, icon } = cityCondition;
    return { temp, condition, icon };
  } catch (error) {
    return window.alert(error.message);
  }
};
