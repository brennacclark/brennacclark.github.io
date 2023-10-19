import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "font-awesome/css/font-awesome.min.css";

const Header = () => {
  const headerStyle = {
    boxShadow: "none",
    background:
      "linear-gradient(0deg, transparent, rgba(255, 165, 79, 0.1)), url('noise.svg')",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: 100,
  };

  return (
    <Navbar expand="lg" style={headerStyle}>
      <Container>
        <Navbar.Brand>
          <Link className="brand-text" to="home" spy={true} smooth={true}>
            Brenna Clark
          </Link>
        </Navbar.Brand>

        {/* Custom Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" spy={true} smooth={true}>
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
