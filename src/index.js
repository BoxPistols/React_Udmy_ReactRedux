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
      <h2 onClick={this.onBtnClick}>
        {this.state.name}: {this.props.age}才
      </h2>
    );
  }
  // add Arrow function
  onBtnClick = () => {
    //alert("XXX");
    this.setState({ name: this.state.name + "San" });
  };
}

render(<Human age="30" />, document.getElementById("root"));
