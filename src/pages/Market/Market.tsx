import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { AddForm } from './AddForm';
import { Pairs } from './Pairs';

const Market: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>([]);

  const addSymbols = (pair: string): void => {
    setSymbols([...symbols, pair]);
  };
  return (
    <Container>
      <section>
        <h1 className="text-center my-3">Coin market</h1>
        <Card style={{ width: '40%' }}>
          <Card.Header className="py-4">
            <AddForm addSymbols={addSymbols} />
          </Card.Header>
          <Card.Body>
            <Pairs symbols={symbols} />
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
};

export default Market;
