// src/components/Header.jsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  const headerStyle = {
    boxShadow: 'none',
  };

  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand>
          <Link className="brand-text" to="home" spy={true} smooth={true}>
            Brenna Clark
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
