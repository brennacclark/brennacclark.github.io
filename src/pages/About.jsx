// src/pages/About.jsx

import React from 'react';
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
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
    <div className="main-content">
      {/* Body Container */}
      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h2>Who Am I?</h2>
              <p>
              I am a User Experience designer and developer with a passion for creating enjoyable and inutitive solutions. With mix of UX design and technical execution, I am comfortable at any point in the software life-cycle, from design to execution to maintenence.
              
              
              </p>
            <h2>My Skills</h2>
              <p>
                I specialize in user experience, software quality, with 8+ years of experience as a software development generalist.
              </p>
            <h2>My Journey</h2>
              <p>
                I started my journey in the world of quality assurance and test automation. I gained experience in performance and devops shipping continuous software. In recent years, I've had a focus on technical writing and knowlege engineering.  
              </p>
              <p>
               I have always been interested in how we, as humans, interact with technology, the effect on its users, and society as a whole. While at IBM, I found that some of the most rewarding work I accomplished was helping design and implement internal tools to enhance the usability and productivity of my coworkers. I enjoyed making their lives easier and appreciated I was able to see the direct results. I wanted to take that motivation and use it to enhance my existing software skills.
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
