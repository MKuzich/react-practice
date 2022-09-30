import axios from 'axios';
import { ISymbol } from '../types/market';

export const getExchangeInfo = async (): Promise<ISymbol[] | never> => {
  const searchParams = new URLSearchParams({
    permissions: '["SPOT"]',
  });
  const BASE_URL = `https://api.binance.com/api/v3/exchangeInfo?${searchParams}`;
  try {
    const res = await axios.get(BASE_URL);
    console.log(res.data);
    return res.data.symbols;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

export const getCandlestickData = async (
  symbols: string
): Promise<any | never> => {
  const searchParams = new URLSearchParams({
    symbol: symbols,
  });
  const BASE_URL = `https://api.binance.com/api/v3/klines?${searchParams}`;
  try {
    const res = await axios.get(BASE_URL);
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};
