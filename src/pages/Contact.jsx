// src/pages/Contact.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {

  return (
    <div>
      {/* Hero Container */}
      <div className="heroContainer text-center">
        <h1>Contact Me</h1>
        <p>Let's get in touch.</p>
      </div>

      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
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
            
            {/* Resume Download */}
            <p>
              <i className="material-icons">download</i> Resume: <a href="path/to/your/resume.pdf" download>Download</a>
            </p>
            
            {/* Resume SVG Placeholder */}
            <div>
              {/* Insert your SVG here */}
              <p>SVG of Resume will go here</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
