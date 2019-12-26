// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

// upper camel case
const ReturnReactElement = () => {
  return <h2>name</h2>;
};

// components <Hoge/>
render(<ReturnReactElement />, document.getElementById("root"));
