import React from 'react';
import { ICurrency } from '../../types/currency';
import Table from 'react-bootstrap/Table';
import { Title } from './Converter.styled';

interface IProps {
  rates: ICurrency[];
}

export const CurrencyTable: React.FC<IProps> = ({ rates }) => {
  return (
    <>
      <Title className="text-center my-4">
        Currency exchange rates at {rates[1]?.exchangedate} from National Bank
        of Ukraine
      </Title>
      <Table striped variant="dark">
        <thead>
          <tr>
            <th className="text-center">Currency</th>
            <th className="text-center">Rate to UAH</th>
          </tr>
        </thead>
        <tbody>
          {rates.map(({ cc, rate }) => {
            if (cc === 'UAH') {
              return <></>;
            }
            return (
              <tr key={cc}>
                <td className="text-center">{cc}</td>
                <td className="text-center">{rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
