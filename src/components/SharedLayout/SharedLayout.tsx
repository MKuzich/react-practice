import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { DiWebplatform } from 'react-icons/di';

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <DiWebplatform size="28px" />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/converter">
              Currency
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Suspense
        fallback={
          <Container>
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
