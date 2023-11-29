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
import Spacer from "./components/Spacer";
import ReactGA from "react-ga";
import MainSection from "./components/MainSection";

function App() {
  // useEffect(() => {
  //   // Initialize Google Analytics
  //   ReactGA.initialize("G-W2V2DMTCDL");
  //   // To report page view
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <main className="App">
      <Header />
      <section className="content-wrapper">

        <Element name="home">
          <Home />
        </Element>
        <Spacer />

        <Element name="about">
          <About />
        </Element>
        <Spacer />

        <Element name="projects">
          <Projects />
        </Element>
        <Spacer />

        <Element name="contact">
          <Contact />
        </Element>

        <MainSection />
      </section>
      <Footer />
    </main>
  );
}

export default App;
