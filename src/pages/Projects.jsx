// src/pages/Projects.jsx

import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../App.css';

const Projects = () => {
  return (
    <div className="main-content">
      {/* Hero Container */}
      <div className="heroContainer text-center">
        <h1>My Projects</h1>
        <p>Discover the work I'm proud of</p>
      </div>

      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col xs={12} md={{ span: 10, offset: 1 }} className="text-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Pokedex.gif"
                  alt="Pokedex Website"
                />
                <Carousel.Caption>
                  <h3>Pokedex!</h3>
                  {/* <p>Description of the first project.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/GameHavenCafe_Hero.png"
                  alt="Game Haven Cafe App Mockups"
                />
                <Carousel.Caption>
                  <h3>Game Haven Cafe</h3>
                  {/* <p>Description of the second project.</p> */}
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
