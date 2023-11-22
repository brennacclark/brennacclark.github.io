import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "../App.css";

const Projects = () => {
  return (
    <body className="main-content">
      <div className="heroContainer text-center">
        <h1>My Projects</h1>
        <p>Discover the work I'm proud of</p>
      </div>
      <Container className="my-5 ">
        <Row className="justify-content-center">
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card text-white">
              <Card.Header style={{ color: "#FFB778", textAlign: "center" }}>
                <h4>Pokédex</h4>
              </Card.Header>
              <Card.Img
                variant="top"
                src="/Pokedex_Crop.gif"
                alt="Pokedex Website"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    Coming Soon!
                  </Badge>{" "}
                  <Badge bg="light" text="dark" className="me-2">
                    React
                  </Badge>{" "}
                  <Badge bg="light" text="dark">
                    API
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://github.com/brennacclark/pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    View the GitHub Repository
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card text-white">
              <Card.Header style={{ color: "#FFB778", textAlign: "center" }}>
                <h4>Pizza Zine</h4>
              </Card.Header>
              <Card.Img
                variant="top"
                src="/pizza_zine_ss.png"
                alt="Ricky Rainbow Beard's Pizza Zine"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    Python / RenPy
                  </Badge>{" "}
                  <Badge bg="light" text="dark">
                    Interactive
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://brennacclark.github.io/pizza_zine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Play the visual story
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card">
              <Card.Header style={{ color: "#FFB778", textAlign: "center" }}>
                <h4>Game Haven Cafe Design Project</h4>
              </Card.Header>
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
                    className="custom-link"
                  >
                    Browse the Figma Design File
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Placeholder Card 1 */}
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card">
              <Card.Header style={{ color: "#FFB778", textAlign: "center" }}>
                <h4>IBM Order Management Service</h4>
              </Card.Header>
              <Card.Img
                variant="top"
                src="IBM_OMS_Call_Center.png"
                alt="IBM OMS Call Center Screenshot"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    Containerization
                  </Badge>{" "}
                  {/* Added margin */}
                  <Badge bg="light" text="dark">
                    Quality Assurance
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://www.ibm.com/products/order-management?utm_content=SRCWW&p1=Search&p4=43700071233519147&p5=e&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFAmNiGZdgjkUNeKhkDeCyyKKizNxudmzGiD8TjeYl_TikdGAC4LGMhoCQZ0QAvD_BwE&gclsrc=aw.ds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Visit the IBM Order Management Solution
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Placeholder Card 2 */}
          <Col xs={12} md={5} className="mb-4">
            <Card bg="dark" className="project-card">
              <Card.Header style={{ color: "#FFB778", textAlign: "center" }}>
                <h4>IBM Inventory Visibility Service</h4>
              </Card.Header>
              <Card.Img
                variant="top"
                src="IBM_IV_Screenshot.png"
                alt="IBM Inventory Service Graphic composed of screenshots"
              />
              <Card.Body className="text-center">
                <Card.Text>
                  <Badge bg="light" text="dark" className="me-2">
                    Automation
                  </Badge>{" "}
                  {/* Added margin */}
                  <Badge bg="light" text="dark">
                    Quality Assurance
                  </Badge>
                </Card.Text>
                <Card.Text>
                  <a
                    href="https://www.ibm.com/products/intelligent-promising/inventory-visibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    Visit the IBM Order Management Solution
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </body>
  );
};

export default Projects;
