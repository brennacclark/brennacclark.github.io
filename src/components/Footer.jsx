// src/components/Footer.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    zIndex: "1030",
    backgroundColor: "gray",
  };

  const footerTextStyle = {
    fontSize: "1.8vh",
    padding: "10px",
    color: "gray",
    
  };

  return (
    <footer className="bg-dark text-white mt-5" style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center" style={footerTextStyle}>
            ©️ 2023 - Brenna Clark - All rights reserved
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={footerTextStyle}>
            🌿🔮✨ Created with 💜 Love, 💡 Curiosity, 🌟 Magic, and ☕ Tea
            ✨🔮🌿
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={footerTextStyle}>
            <a
              href="https://github.com/brennacclark/brennacclark.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="noTextDecoration"
            >
              Browse the code on GitHub 👀
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
