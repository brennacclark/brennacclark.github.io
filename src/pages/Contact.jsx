import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <div className="main-content">
      {/* Hero Container */}
      <div className="heroContainer text-center" style={{marginBottom: '-5vh'}}>
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

      {/* Resume SVG */}
      <div
        className="svgContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src="/BrennaClark_UX_2023.svg"
          alt="Resume SVG"
          className="responsive-svg"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Contact;
