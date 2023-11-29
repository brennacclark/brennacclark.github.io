import React, { Component } from "react";

export default class Spacer extends Component {
  render() {
    return (
      <main>
        <img
          src={"/spacer.svg"}
          alt="Breaker"
          style={{
            width: "100%",
            transform: "scale(0.5)",
          }}
        />
      </main>
    );
  }
}
