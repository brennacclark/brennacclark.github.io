// src/App.jsx
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sidebar from './pages/Sidebar';
import Test from './pages/Test';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        {/* <Header /> */}
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
