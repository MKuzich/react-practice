import axios from 'axios';
import { ISymbol, Interval } from '../types/market';

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
  symbols: string,
  interval: Interval
): Promise<any | never> => {
  const searchParams = new URLSearchParams({
    symbol: symbols,
    interval: interval,
    limit: '20',
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

// Kline/Candlestick chart intervals:

// s-> seconds; m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

// 1s
// 1m
// 3m
// 5m
// 15m
// 30m
// 1h
// 2h
// 4h
// 6h
// 8h
// 12h
// 1d
// 3d
// 1w
// 1M
