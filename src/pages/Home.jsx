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
            <h2>Hey, I'm Brenna!</h2>
          </div>
          <div>
            <p>Striving to create enriching user experiences</p>
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

      {/* Hero Container */}
      <div
        className="home-bio"
        style={{ textAlign: "center", padding: "0vh 15vw" }}
      >
        <p>
          I am a User Experience designer and developer with a passion for
          creating enjoyable and inutitive solutions. With mix of UX design, 
          technical execution, and 8+ years of experience, I'm comfortable at any point in the software
          lifecycle, from design to execution to maintenence. Put me on your team!

        </p>
      </div>
    </div>
  );
};

export default Home;
