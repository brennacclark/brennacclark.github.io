// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: '1030'
  };

  return (
    <footer className="bg-dark text-white mt-5" style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; {new Date().getFullYear()} - Brenna Clark
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
