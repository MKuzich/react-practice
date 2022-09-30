import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <ListGroup style={{ width: '50%', margin: '32px auto' }}>
        <ListGroup.Item variant="dark" style={{ textAlign: 'center' }}>
          Choose the application
        </ListGroup.Item>
        <ListGroup.Item action as={NavLink} to="/converter">
          Convertor app
        </ListGroup.Item>
        <ListGroup.Item action as={NavLink} to="/weather">
          Weather app
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
