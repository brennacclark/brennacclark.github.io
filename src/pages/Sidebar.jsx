import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const iconContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-around",
      height: "100%", // Taking full height of sidebar
    };

    const iconStyle = {
      margin: "8px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // Distribute space around the icon and text
      width: "50%",
    };

    return (
      <div className="sidebar">
        <h3 className="brand-text">Brenna Clark</h3>
        <div style={iconContainerStyle}>
          <div style={iconStyle}>
            <span className="material-icons">info</span>
            <span>About</span> {/* Wrapped text in a span for better control */}
          </div>
          <div style={iconStyle}>
            <span className="material-icons">work</span>
            <span>Projects</span>
          </div>
          <div style={iconStyle}>
            <span className="material-icons">mail</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    );
  }
}
