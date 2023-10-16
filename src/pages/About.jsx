// src/pages/About.jsx

import React from 'react';
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
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

  return (
    <div>
      {/* Hero Container */}
      <div className="heroContainer text-center">
        <h1>About Me</h1>
        <p>Your unique story starts here.</p>
      </div>

      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h2>Who Am I?</h2>
            <p>
              I am a web developer with a passion for creating stunning websites and applications that provide value to users.
            </p>
            <h2>My Skills</h2>
            <p>
              I specialize in React, Vite, Node.js, and other modern web technologies.
            </p>
            <h2>My Journey</h2>
            <p>
              I started my journey in the world of web development several years ago and have worked on various projects, honing my skills and learning new technologies along the way.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
