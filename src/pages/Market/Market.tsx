import React, { useState, useEffect } from 'react';
import { Container, Card, Stack } from 'react-bootstrap';
import { AddForm } from './AddForm';
import { Pairs } from './Pairs';
import { getCandlestickData } from '../../services/marketApi';
import { Interval, ISymbolsData } from '../../types/market';
import { Graph } from './Graph';

const intervalsArr: Interval[] = [
  '1s',
  '1m',
  '3m',
  '5m',
  '15m',
  '30m',
  '1h',
  '3d',
  '2h',
  '1M',
  '4h',
  '6h',
  '8h',
  '12h',
  '1d',
  '1w',
];

const Market: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [timeInterval, setTimeInterval] = useState<Interval>('1d');
  const [symbolsData, setSymbolsData] = useState<ISymbolsData[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const arrayOfPromises = symbols.map(async symbol => {
        const res = await getCandlestickData(symbol, timeInterval);
        return res;
      });
      const resArr = await Promise.all(arrayOfPromises);
      const data = resArr.map((res, idx) => {
        return { symbols: symbols[idx], data: res };
      });
      setSymbolsData(data);
    };
    getData();
  }, [symbols, timeInterval]);

  const onChangeIntervalHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeInterval(e.target.value as Interval);
  };

  const addSymbols = (pair: string): void => {
    setSymbols([...symbols, pair]);
  };

  const deleteSymbols = (pair: string): void => {
    const newArr = symbols.filter(symbol => symbol !== pair);
    setSymbols(newArr);
  };

  const onClickSelectSymbols = (selected: string | null): void => {
    if (selected === null) return;
    setSelectedSymbol(selected);
    console.log('its selected', selectedSymbol);
  };

  return (
    <Container>
      <section>
        <h1 className="text-center my-3">Coin market</h1>
        <select onChange={onChangeIntervalHandler}>
          {intervalsArr.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <Stack direction="horizontal" gap={3}>
          <Card style={{ width: '40%' }}>
            <Card.Header className="py-4">
              <AddForm addSymbols={addSymbols} />
            </Card.Header>
            <Card.Body>
              <Pairs
                deleteSymbols={deleteSymbols}
                data={symbolsData}
                onClickSelectSymbols={onClickSelectSymbols}
              />
            </Card.Body>
          </Card>
          {selectedSymbol && (
            <Graph
              symbol={symbolsData.find(el => el.symbols === selectedSymbol)!}
            />
          )}
        </Stack>
      </section>
    </Container>
  );
};

export default Market;
