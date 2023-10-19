import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="main-content about-content">
      {/* Body Container */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center">
            <p>
              I’m Brenna - thanks for stopping by my page. I’m a software
              developer, Rhode Islander, animal lover, gamer, and most
              importantly - human!
            </p>
            <p>
              I find it satisfying and rewarding to create an experience that
              helps the greatest number of people. I’m curious about how modern
              tools and technology, such as AI, VR and AR, will continue to
              integrate our everyday lives. What will the future of human-tech
              relations look like? How can we create tools and experiences that
              adapt to the needs of the customers, industry, and modern society?
              And how can we continuously adapt in a responsible, ethical, and
              equitable way?
            </p>
            <h2>My Skills</h2>
            <p>
              I specialize in user experience, software quality, with 8+ years
              of experience as a software development generalist.
            </p>
            <h2>My Journey</h2>
            <p>
              I started my journey in the world of quality assurance and test
              automation. I gained experience in performance and devops shipping
              continuous software. In recent years, I've had a focus on
              technical writing and knowledge engineering.
            </p>
            <p>
              I have always been interested in how we, as humans, interact with
              technology, the effect on its users, and society as a whole. While
              at IBM, I found that some of the most rewarding work I
              accomplished was helping design and implement internal tools to
              enhance the usability and productivity of my coworkers. I enjoyed
              making their lives easier and appreciated I was able to see the
              direct results. I wanted to take that motivation and use it to
              enhance my existing software skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
