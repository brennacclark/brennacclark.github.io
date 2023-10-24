import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const headerStyle = {
    boxShadow: "none",
    background:
      "linear-gradient(0deg, transparent, rgba(255, 165, 79, 0.1)), url('noise.svg')",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: 100,
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      style={headerStyle}
    >
      <Container>
        <Navbar.Brand>
          <Link
            className="brand-text"
            to="home"
            spy={true}
            smooth={true}
            onClick={closeNav}
          >
            Brenna Clark
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link
                className="nav-item"
                to="about"
                spy={true}
                smooth={true}
                onClick={closeNav}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-item"
                to="projects"
                spy={true}
                smooth={true}
                onClick={closeNav}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-item"
                to="contact"
                spy={true}
                smooth={true}
                onClick={closeNav}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
