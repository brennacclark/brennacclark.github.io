import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// Styled component for the footer container
const FooterContainer = styled.footer`
  width: 100%;
  z-index: 1030;
  background-color: gray;
`;

// Styled component for the text within the footer
const FooterText = styled.div`
  font-size: 1.8vh;
  padding: 10px;
  color: gray;
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <FooterText>
              ©️ 2023 - Brenna Clark - All rights reserved
            </FooterText>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <FooterText>
              🌿🔮✨ Created with 💡 Curiosity, 💜 Love, 🌟 Magic, and ☕ Tea
              ✨🔮🌿
            </FooterText>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <FooterText>
              <a
                href="https://github.com/brennacclark/brennacclark.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="noTextDecoration"
              >
                Browse the code on GitHub 👀
              </a>
            </FooterText>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
