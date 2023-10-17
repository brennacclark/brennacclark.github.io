import React from 'react';
import { Button } from 'react-bootstrap';
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
            <p>UX Designer and Developer striving to create enriching user experiences</p>
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
    </div>
  );
};

export default Home;
