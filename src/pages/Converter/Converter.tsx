import React, { useEffect, useState } from 'react';
import { getCurrencyExchangeRate } from '../../services/currencyApi';
import { ICurrency } from '../../types/currency';
import { Field } from './Field';
import { Container, Stack } from 'react-bootstrap';
import { CurrencyTable } from './CurrencyTable';
import { Title } from './Converter.styled';
import { FaExchangeAlt } from 'react-icons/fa';

const hrivna: ICurrency = {
  cc: 'UAH',
  rate: 1,
  txt: 'Українська гривня',
  exchangedate: 'all time',
};

const Converter: React.FC = () => {
  const [rates, setRates] = useState<ICurrency[]>([]);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [firstCurrency, setFirstCurrency] = useState<string>('UAH');
  const [secondCurrency, setSecondCurrency] = useState<string>('USD');

  useEffect(() => {
    getCurrencyExchangeRate().then(res => {
      setRates([hrivna, ...res]);
    });
  }, []);

  useEffect(() => {}, [firstCurrency]);

  const onFirstSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstCurrency(e.target.value);
  };

  const onFirstChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstAmount = Number(e.target.value);
    if (firstAmount >= 0) {
      setFirstValue(firstAmount);
      const firstRate = rates.find(el => el.cc === firstCurrency)?.rate!;
      const secondRate = rates.find(el => el.cc === secondCurrency)?.rate!;
      const secondAmount = (firstAmount * firstRate) / secondRate;
      setSecondValue(secondAmount);
    }
  };

  const onSecondSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondCurrency(e.target.value);
  };

  const onSecondChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secondAmount = Number(e.target.value);
    if (secondAmount >= 0) {
      setSecondValue(secondAmount);
      const firstRate = rates.find(el => el.cc === firstCurrency)?.rate!;
      const secondRate = rates.find(el => el.cc === secondCurrency)?.rate!;
      const firstAmount = (secondAmount * secondRate) / firstRate;
      setFirstValue(firstAmount);
    }
  };

  return (
    <Container>
      <section>
        <h1 className="text-center">Currency exchange rates</h1>
        <Container className="mx-auto">
          <Title>Currency converter</Title>
          <Container>
            <Stack direction="horizontal" gap={3}>
              <Field
                name="I have"
                rates={rates}
                value={firstValue}
                currency={firstCurrency}
                onChangeHandler={onFirstChangeHandler}
                onSelectHandler={onFirstSelectHandler}
              />
              <div className="mt-auto pb-1">
                <FaExchangeAlt size="32px" />
              </div>
              <Field
                name="I will receive"
                rates={rates}
                value={secondValue}
                currency={secondCurrency}
                onChangeHandler={onSecondChangeHandler}
                onSelectHandler={onSecondSelectHandler}
              />
            </Stack>
          </Container>
        </Container>
        <CurrencyTable rates={rates} />
      </section>
    </Container>
  );
};

export default Converter;
