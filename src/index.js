// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";
import { var1, func1 } from "./module";

console.log(var1);
func1();

const App = () => (
  <div>
    <h2>Start</h2>
  </div>
);

render(<App />, document.getElementById("root"));
