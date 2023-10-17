import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';  // Importing the CSS file
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="main-content">
      <div className="heroContainerStyle">
        <div className="textSectionStyle">
          <div>
            <h1>Hello, I'm Brenna Clark</h1>
          </div>
          <div>
            <p>UX Designer and Developer </p>
          </div>
          <div className="buttonContainerStyle">
            <Link to="about" spy={true} smooth={true}>
              <Button variant="secondary" className="buttonStyle">
                My story
              </Button>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <Button variant="secondary" className="buttonStyle">
                Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="imageContainerStyle">
          <div className="profileImageStyle"></div>
          <div className="profileCircleStyle"></div>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <p>
            Versatile UX Designer adept at blending a unique mix of technical proficiency and design expertise. Skilled in software development methodologies, technical writing, and product quality assurance, 
            I am committed to delivering exceptional user experiences through intuitive design, empathy, 
            and user-centered practices.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
