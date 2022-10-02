import React, { useState, useEffect } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import { getExchangeInfo } from '../../services/marketApi';
import { ISymbol } from '../../types/market';

interface FormElements extends HTMLFormControlsCollection {
  base: HTMLInputElement;
  quote: HTMLInputElement;
}
interface IProps {
  addSymbols: (pair: string) => void;
}

export const AddForm: React.FC<IProps> = ({ addSymbols }) => {
  const [data, setData] = useState<ISymbol[]>([]);
  const [baseArr, setBaseArr] = useState<string[]>();
  const [quoteArr, setQuoteArr] = useState<string[]>();

  useEffect(() => {
    const getData = async () => {
      const res = await getExchangeInfo();
      setData(res);
    };
    getData();
  }, []);

  useEffect(() => {
    const tokensArray = data
      .map((el: ISymbol) => el.baseAsset)
      .filter((token, index, array) => array.indexOf(token) === index);
    setBaseArr(tokensArray);
  }, [data]);

  const onBaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tokensArray = data
      .filter(el => el.baseAsset === e.target.value)
      .map(el => el.quoteAsset);
    setQuoteArr(tokensArray);
  };

  const onQuoteChange = () => {};

  const onSubmitHandler = (e: React.FormEvent): any => {
    e.preventDefault();
    const base = ((e.target as HTMLFormElement).elements as FormElements).base
      .value;
    const quote = ((e.target as HTMLFormElement).elements as FormElements).quote
      .value;
    const symbols: string = base + quote;
    addSymbols(symbols);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Stack direction="horizontal" gap={3}>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Select name="base" onChange={onBaseChange}>
            {baseArr &&
              baseArr.map((token: string) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Select name="quote" onChange={onQuoteChange}>
            {quoteArr &&
              quoteArr.map((token: string) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="mt-auto" variant="dark">
          Add
        </Button>
      </Stack>
    </Form>
  );
};
