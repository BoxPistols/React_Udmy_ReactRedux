// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.temp}℃</h2>
        <button onClick={this.onClickPlus}>+</button>
        <button onClick={this.onClickPlus10}>+10</button>
        <button onClick={this.onClickMinus}>-</button>
        <button onClick={this.onClickMinus10}>-10</button>
      </div>
    );
  }
  onClickPlus = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onClickPlus10 = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  onClickMinus = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onClickMinus10 = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}
render(<H2O name="温度" />, document.getElementById("root"));
