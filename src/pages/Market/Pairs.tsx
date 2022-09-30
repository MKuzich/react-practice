import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getCandlestickData } from '../../services/marketApi';

interface IProps {
  symbols: string[];
}

export const Pairs: React.FC<IProps> = ({ symbols }) => {
  const [tokens, setTokens] = useState<any[]>();

  useEffect(() => {
    const getData = async () => {
      const arrayOfPromises = symbols.map(async symbol => {
        const res = await getCandlestickData(symbol);
        return res;
      });
      const data = await Promise.all(arrayOfPromises);
      setTokens(data);
    };
    getData();
  }, [symbols]);

  useEffect(() => {
    console.log(tokens);
  }, [tokens]);
  return (
    <Table striped variant="dark">
      <thead>
        <tr>
          <th className="text-center">Pair</th>
          <th className="text-center">Price</th>
          <th className="text-center"></th>
        </tr>
      </thead>
      <tbody>
        {/* {tokens.map(el => (
          <tr key={}>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};
