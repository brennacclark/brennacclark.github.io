import React from "react";

function App() {
  const sidebarStyle = {
    position: "fixed",
    top: "0%",
    left: "0%",
    width: "20vw",
    height: "100vh",
    backgroundColor: "lightgrey",
    padding: "1em",
  };

  const contentStyle = {
    marginLeft: "21vw",
    padding: "1em",
    overflowY: "auto",
    height: "calc(100vh - 5vh)",
  };

  const footerStyle = {
    position: "fixed",
    bottom: "0%",
    width: "100%",
    height: "5vh",
    backgroundColor: "darkgrey",
    textAlign: "center",
    lineHeight: "5vh",
  };
    
  return (
    <div>
      <div style={sidebarStyle}>
        <h3>Sidebar</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div style={contentStyle}></div>

      <div style={footerStyle}>Footer</div>
    </div>
  );
}

export default App;
