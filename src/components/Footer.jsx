// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '4vh',
    zIndex: '1030',
    backgroundColor: 'gray',
  };

  const footerTextStyle = {
    padding: '5px',
    color: 'gray'
  };

  return (
    <footer className="bg-dark text-white mt-5" style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center" style={footerTextStyle}>
            Copyright &copy; {new Date().getFullYear()} - Brenna Clark
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
