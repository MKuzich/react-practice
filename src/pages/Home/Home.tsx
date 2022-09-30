import React from 'react';
import { Container, ListGroup, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <ListGroup style={{ width: '50%', margin: '32px auto' }}>
        <ListGroup.Item variant="dark" style={{ textAlign: 'center' }}>
          Choose the application
        </ListGroup.Item>
        <ListGroup.Item action as={NavLink} to="/converter">
          <Badge bg="secondary">Convertor</Badge> You can convert the cost from
          one currency to another by daily rates. Also you can see the table of
          different exchange rates to UAH. Used National Bank of Ukraine API.
        </ListGroup.Item>
        <ListGroup.Item action as={NavLink} to="/weather">
          <Badge bg="secondary">Weather</Badge> You can find current weather and
          5 days temperature forecast by name of your city. Used openweather
          API.
        </ListGroup.Item>
        <ListGroup.Item action as={NavLink} to="/market">
          <Badge bg="secondary">Market</Badge> The application, where you can
          choose your favourite crypto-tokens and monitor the change of their
          value on the charts. Used Binance API.
        </ListGroup.Item>
        <ListGroup.Item variant="secondary" style={{ textAlign: 'center' }}>
          *There are you can find different applications. Used techs:
          JavaScript, TypeScript, React, React-Router, React-Bootstrap, Axios.
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Home;
