// src/pages/Contact.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {

  return (
    <div className="main-content">
      {/* Hero Container */}
      <div className="heroContainer text-center">
        <h1>Contact Me</h1>
        <p>Let's get in touch.</p>
      </div>

      {/* Body Container */}
      <Container className="my-5 contactBody">
        <Row>
          {/* Left Column for Text */}
          <Col md={6}>
            <h2>Contact Information</h2>
            
            {/* Email */}
            <p>
              <i className="material-icons">email</i> Email: <a href="mailto:example@example.com">example@example.com</a>
            </p>
            
            {/* LinkedIn */}
            <p>
              <i className="material-icons">business</i> LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a>
            </p>
            
            {/* GitHub */}
            <p>
              <i className="material-icons">code</i> GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
            </p>

            {/* Resume Download Button */}
                <a href="/BrennaClark_UX_2023.pdf" download style={{marginTop: '10px'}}>
                <i className="material-icons">file_download</i> Download Resume
              </a>
          </Col>
          {/* Right Column for Resume SVG */}
          <Col md={6} className="d-flex align-items-start justify-content-center">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {/* Insert your 8/11 ratio SVG here */}
              <img src="/BrennaClark_UX_2023.svg" alt="Resume SVG" className="responsive-svg" style={{maxWidth: '100%'}}/>


            </div>
          </Col>
          <Col>

              </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
