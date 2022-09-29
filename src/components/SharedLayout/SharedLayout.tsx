import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { DiWebplatform } from 'react-icons/di';
import { BsCurrencyExchange } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <DiWebplatform size="48px" />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="d-flex flex-column align-items-center"
            >
              <FaHome />
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/converter"
              className="d-flex flex-column align-items-center"
            >
              <BsCurrencyExchange />
              Currency
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/weather"
              className="d-flex flex-column align-items-center"
            >
              <TiWeatherCloudy />
              Weather
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Suspense
        fallback={
          <Container className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
