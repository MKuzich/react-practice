import axios from 'axios';
import { IResponse } from '../types/weather';

export const getCurrentWeather = async (
  city: string
): Promise<IResponse | never> => {
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
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?${searchWeatherParams}`;
    const currentData = await axios.get(WEATHER_URL);
    const currentWeather = currentData.data;

    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?${searchWeatherParams}`;
    const forecastData = await axios.get(FORECAST_URL);
    const forecastWeather = forecastData.data;

    return { currentWeather, forecastWeather };
  } catch (error: any) {
    return error;
  }
};
