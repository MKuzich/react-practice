import axios from 'axios';

export const getCurrentWeather = async (city: string) => {
  const searchCityParams = new URLSearchParams({
    appid: '7c0ca10b6b7d582c36f6c73564f8fbab',
    q: city,
  });

  const CITY_URL = `http://api.openweathermap.org/geo/1.0/direct?${searchCityParams}`;

  try {
    const res: { data: { lat: number; lon: number }[] } = await axios.get(
      CITY_URL
    );
    const location = res.data[0];
    const lat = location.lat.toString();
    const lon = location.lon.toString();
    const searchWeatherParams = new URLSearchParams({
      appid: '7c0ca10b6b7d582c36f6c73564f8fbab',
      lat,
      lon,
      units: 'metric',
    });

    const WETHER_URL = `https://api.openweathermap.org/data/2.5/weather?${searchWeatherParams}`;
    const weather = await axios.get(WETHER_URL);
    return weather.data;
  } catch (error) {
    return error;
  }
};
