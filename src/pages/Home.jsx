import React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import '../styles/Home.css';  // Importing the CSS file
import { Link } from 'react-scroll';
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create the theme outside of the Home component
const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#ffb778", // Orange
    },
    secondary: {
      main: "#C3CB98", // Olive
    },
    error: {
      main: "#6BA3D6", // Blue
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <body className="main-content">
        <div className="heroContainerStyle">
          <div className="textSectionStyle">
            <div>
              <h2>Hey, I'm Brenna!</h2>
            </div>
            <div>
              <p>All Things Tech</p>
            </div>
            <div className="buttonContainerStyle">
              <ThemeProvider theme={theme}>
                <Link to="about" spy={true} smooth={true}>
                  <ToggleButton
                    variant="secondary"
                    color="primary"
                    className="buttonStyle"
                    value="story"
                  >
                    My story
                  </ToggleButton>
                </Link>
                <Link to="contact" spy={true} smooth={true}>
                  <ToggleButton
                    variant="secondary"
                    color="primary"
                    className="buttonStyle"
                    value="resume"
                  >
                    Resume
                  </ToggleButton>
                </Link>
              </ThemeProvider>
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
            I am a User Experience Designer and Developer with a passion for
            creating solutions that are both enjoyable and intuitive. With a
            diverse mix of UX design, technical execution, and AV technology
            expertise, I bring over 8 years of experience to the table. I am
            comfortable at any point in the software lifecycle, from design to
            execution to maintenance, ensuring that all components and elements
            seamlessly blend with user interactions and perform optimally.
          </p>
        </div>
      </body>
    </ThemeProvider>
  );
};

export default Home;
