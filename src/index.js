import React from 'react';
import { render } from 'react-dom';
import './styles.css';

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H20State(temp) {
    if (temp <= 0) {
      return 'ice';
    } else if (temp >= 100) {
      return 'steam';
    } else return 'water';
  }
  render() {
    return (
      <div className="box">
        <div className={this.H20State(this.state.temp)}>
          <h1>
            {/* このH20State関数(tempの内容、tempの状態) */}
            Phase: {this.H20State(this.state.temp)} {this.props.name}
          </h1>
          <h2>{this.state.temp}℃</h2>
          <button onClick={this.onClickMinus10}>-10</button>
          <button onClick={this.onClickMinus}>-</button>
          <button onClick={this.onClickPlus}>+</button>
          <button onClick={this.onClickPlus10}>+10</button>
        </div>
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
render(<H2O name="" />, document.getElementById('root'));
