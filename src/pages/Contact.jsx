import React from "react";
import "font-awesome/css/font-awesome.min.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Contact = () => {
  const [resume, setResume] = React.useState("SD");

  const handleResume = (event, newResume) => {
    setResume(newResume);
  };

  const svgFileName = `/BrennaClark_${resume}_Resume_2023.svg`;
  const pdfFileName = `/BrennaClark_${resume}_Resume_2023.pdf`;

  return (
    <div className="main-content">
      {/* Hero Container */}
      <div
        className="heroContainer text-center"
        style={{ marginBottom: "-5vh" }}
      >
        <h1>Contact Me</h1>
        <p>Let's get in touch.</p>
      </div>

      {/* Body Container */}
      <div
        className="contactBody"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Contact Links */}
        <div
          className="contactLinkContainer"
          style={{
            paddingTop: "10vh",
            marginBottom: "10vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>
            {/* Email */}
            <a href="mailto:brennacclark@gmail.com" title="Email">
              <i
                className="fa fa-envelope"
                style={{ fontSize: "48px", margin: "0 15px" }}
              ></i>
            </a>
          </div>
          <div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/brennacclark/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i
                className="fa fa-linkedin"
                style={{ fontSize: "48px", margin: "0 15px" }}
              ></i>
            </a>
          </div>
          <div>
            {/* GitHub */}
            <a
              href="https://github.com/brennacclark"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i
                className="fa fa-github"
                style={{ fontSize: "48px", margin: "0 15px" }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "1vw",
        }}
      >
        <ToggleButtonGroup
          value={resume}
          exclusive
          onChange={handleResume}
          aria-label="Basic example"
        >
          <ToggleButton value="SD" variant="secondary">
            Software Developer
          </ToggleButton>
          <ToggleButton value="UX" variant="secondary">
            UX Designer
          </ToggleButton>
        </ToggleButtonGroup>
        {/* Download Button */}
        <a href={pdfFileName} download style={{ marginLeft: "20px" }}>
          <i
            className="fa fa-download"
            style={{ fontSize: "48px", margin: "0 15px" }}
          ></i>
        </a>
      </div>

      {/* Resume SVG */}
      <div
        className="svgContainer"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={svgFileName}
          alt="Resume SVG"
          className="responsive-svg"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Contact;