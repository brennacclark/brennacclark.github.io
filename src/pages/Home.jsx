import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // Importing the CSS file

const Home = () => {
  return (
    <div className="main-content">
      <div className="heroContainerStyle">
        <div className="textSectionStyle">
          <div>
            <h1>Hello, I'm Brenna Clark</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="buttonContainerStyle">
            <Link to="/about">
              <Button variant="secondary" className="buttonStyle">
                My story
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="buttonStyle">
                Get in touch
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
