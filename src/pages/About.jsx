import React from "react";
import "../App.css";
import CareerTimeline from "./CareerTimeline";

const About = () => {
  return (
    <main className="main-content about-content">
      <header className="container my-5">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center">
            <p className="mb-4">
              I’m Brenna - thanks for stopping by my page. I’m a software
              developer, Rhode Islander, animal lover, gamer, and most
              importantly - human!
            </p>
            <p className="mb-4">
              I find it satisfying and rewarding to create an experience that
              helps the greatest number of people. I’m curious about how modern
              tools and technology, such as AI, VR and AR, will continue to
              integrate our everyday lives.
            </p>
            <p className="mb-4">
              What will the future of human-tech relations look like? How can we
              create tools and experiences that adapt to the needs of the
              customers, industry, and modern society? And how can we
              continuously adapt in a responsible, ethical, and equitable way?
            </p>
          </div>
        </div>
      </header>

      <section style={{ marginTop: "10vh" }}>
        <h3 style={{ textAlign: "center" }} className="mb-4">
          My Journey
        </h3>
        <CareerTimeline />
      </section>
    </main>
  );
};

export default About;
