// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "田中" };
  }
  render() {
    return (
      <h2>
        {this.state.name}: {this.props.age}才
      </h2>
    );
  }
}

render(<Human age="30" />, document.getElementById("root"));
