import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
  const heroContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60vh',
    background: 'linear-gradient(to right, #FFB778 0%, #8B4513 100%)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    padding: '0 15vw',
  };

  const profileImageStyle = {
    width: '40vw',
    aspectRatio: '1 / 1',
    backgroundImage: 'url(/BrennaLogo.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 2,
  };

  const profileCircleStyle = {
    width: '35vw',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '4px solid #FFD700',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 1,
  };

  const textSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
    padding: '0 20px',
  };

  const buttonContainerStyle = {
    margin: '10px',
    padding: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    border: '#333',
    padding: '15px 30px', // Increase padding around buttons
    marginRight: '10px',  // Added right margin to the first button
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '500px',
    aspectRatio: '1 / 1',
};
  

  return (
    <div className="main-content">
      <div style={heroContainerStyle}>
        <div style={textSectionStyle}>
          <div>
            <h1>Hello, I'm Brenna Clark</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div style={buttonContainerStyle}>
            <Button variant="secondary" style={buttonStyle}>My story</Button>
            <Button variant="primary" style={buttonStyle}>Get in touch</Button>
          </div>
        </div>
        <div style={imageContainerStyle}>
          <div style={profileImageStyle}></div>
          <div style={profileCircleStyle}></div>
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
