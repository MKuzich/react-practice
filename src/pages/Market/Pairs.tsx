import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { ISymbolsData } from '../../types/market';

interface IProps {
  deleteSymbols: (pair: string) => void;
  onClickSelectSymbols: (selected: string | null) => void;
  data: ISymbolsData[];
}

export const Pairs: React.FC<IProps> = ({
  deleteSymbols,
  onClickSelectSymbols,
  data,
}) => {
  const onDeleteClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteSymbols((e.target as HTMLButtonElement).id);
  };

  const onSelectClickHandler = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if ((e.target as HTMLButtonElement).nodeName === 'BUTTON') {
      return;
    }
    const selected: string | null = e.currentTarget.cells[0].textContent;
    onClickSelectSymbols(selected);
  };

  return (
    <Table striped variant="dark">
      <thead>
        <tr>
          <th className="text-center">Pair</th>
          <th className="text-center">Price</th>
          <th className="text-center">Options</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ symbols }) => (
          <tr key={symbols} onClick={onSelectClickHandler}>
            <td className="text-center">{symbols}</td>
            <td className="text-center">{}</td>
            <td className="text-center">
              {
                <Button
                  type="button"
                  id={symbols}
                  variant="dark"
                  onClick={onDeleteClickHandler}
                >
                  Delete
                </Button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
