// src/App.jsx
import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ReactGA from "react-ga";

function App() {
  // useEffect(() => {
  //   // Initialize Google Analytics
  //   ReactGA.initialize("G-W2V2DMTCDL");
  //   // To report page view
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Element name="home">
          <Home />
        </Element>
        <img
          src={"/spacer.svg"}
          alt="Breaker"
          style={{
            width: "100%",
            transform: "scale(0.5)",
          }}
        />
        <Element name="about">
          <About />
        </Element>

        <img
          src={"/spacer.svg"}
          alt="Breaker"
          style={{
            width: "100%",
            transform: "scale(0.5)",
          }}
        />
        <Element name="projects">
          <Projects />
        </Element>

        <img
          src={"/spacer.svg"}
          alt="Breaker"
          style={{
            width: "100%",
            transform: "scale(0.5)",
          }}
        />
        
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
