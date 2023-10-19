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
            <Card bg="dark" className="project-card">
              <Card.Img
                variant="top"
                src="/Pokedex_Crop.gif"
                alt="Pokedex Website"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    React
                  </Badge>{" "}
                  {/* Added margin */}
                  <Badge bg="light" text="dark">
                    API
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://github.com/brennacclark/pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FFB778", textDecoration: "none" }}
                  >
                    View the GitHub Repository
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card">
              <Card.Img
                variant="top"
                src="/GameHavenCafe_Hero.png"
                alt="Game Haven Cafe App Mockups"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    Figma
                  </Badge>{" "}
                  {/* Added margin */}
                  <Badge bg="light" text="dark">
                    Case Study
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://www.figma.com/file/A8rjQqA55WHyVMLuC1WqB7/Game-Haven-Cafe?type=design&node-id=70%3A308&mode=design&t=eEfYACKKDiLZsCdT-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FFB778", textDecoration: "none" }}
                  >
                    Browse the Figma Design File
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
