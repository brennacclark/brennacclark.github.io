// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    zIndex: '1030',
    backgroundColor: 'gray',
  };

  const footerTextStyle = {
    fontSize: '1.8vh',
    padding: '10px',
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
