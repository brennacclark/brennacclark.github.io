// src/pages/Home.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  // Define the styles
  const heroContainerStyle = {
    background: 'linear-gradient(to right, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)',
    color: 'white',
    padding: '150px 0',
    position: 'relative',
    zIndex: '1',
    overflow: 'hidden',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)'
  };

  const elevationEffectStyle = {
    content: '\'\'',
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    pointerEvents: 'none',
    zIndex: '-1'
  };

  return (
    <div className="main-content">
      {/* Hero Container */}
      <div style={heroContainerStyle} className="text-center">
        {/* Elevation Effect */}
        <div style={elevationEffectStyle}></div>

        <h1>Welcome to My Portfolio</h1>
        <p>Creating stunning websites that make an impact.</p>
      </div>

      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h1>Your Name</h1>
            <p>
              This is your personal statement. You can describe your skills,
              experience, and what you're passionate about.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
