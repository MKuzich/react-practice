import axios from 'axios';

const BASE_URL =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getCurrencyExchangeRate = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return error;
  }
};
