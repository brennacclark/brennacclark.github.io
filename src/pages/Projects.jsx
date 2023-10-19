// src/pages/Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "../App.css";

const Projects = () => {
  return (
    <div className="main-content">
      <div className="heroContainer text-center">
        <h1>My Projects</h1>
        <p>Discover the work I'm proud of</p>
      </div>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="mb-4">
            <Card className="project-card">
              <div className="project-image-container">
                <Card.Img
                  variant="top"
                  src="/Pokedex_Crop.gif"
                  alt="Pokedex Website"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Pokedex!</Card.Title>
                <Card.Text>
                  <Badge variant="primary">React</Badge>
                  <Badge variant="secondary">API</Badge>
                </Card.Text>
                <a
                  href="https://github.com/brennacclark/pokedex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Link>View the GitHub Repository</Card.Link>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="mb-4">
            <Card className="project-card">
              <div className="project-image-container">
                <Card.Img
                  variant="top"
                  src="/GameHavenCafe_Hero.png"
                  alt="Game Haven Cafe App Mockups"
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Game Haven Cafe</Card.Title>
                <Card.Text>
                  <Badge variant="primary">Figma</Badge>
                  <Badge variant="secondary">Case Study</Badge>
                </Card.Text>
                <a
                  href="https://www.figma.com/file/A8rjQqA55WHyVMLuC1WqB7/Game-Haven-Cafe?type=design&node-id=70%3A308&mode=design&t=eEfYACKKDiLZsCdT-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Link>Browse the Figma Design File</Card.Link>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
