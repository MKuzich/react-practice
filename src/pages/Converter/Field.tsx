import React from 'react';
import { ICurrency } from '../../types/currency';
import { Form, Stack } from 'react-bootstrap';

interface IProps {
  name: string;
  rates: ICurrency[];
  value: number;
  currency: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Field: React.FC<IProps> = ({
  rates,
  value,
  currency,
  onChangeHandler,
  onSelectHandler,
  name,
}) => {
  return (
    <div>
      <p>{name}</p>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          type="text"
          value={Math.round(value * 100) / 100}
          onChange={onChangeHandler}
        />
        <Form.Select onChange={onSelectHandler} value={currency}>
          {rates.map(({ cc }) => (
            <option key={cc + '1'} value={cc}>
              {cc}
            </option>
          ))}
        </Form.Select>
      </Stack>
    </div>
  );
};
