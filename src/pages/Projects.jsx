// src/pages/Projects.jsx

import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Projects = () => {
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
      <div style={heroContainerStyle} className="text-center">
        <h1>My Projects</h1>
        <p>Discover the work I'm proud of.</p>
      </div>

      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="text-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="Project 1"
                />
                <Carousel.Caption>
                  <h3>Project 1</h3>
                  <p>Description of the first project.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400"
                  alt="Project 2"
                />
                <Carousel.Caption>
                  <h3>Project 2</h3>
                  <p>Description of the second project.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel.Items as needed */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
