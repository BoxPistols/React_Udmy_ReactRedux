// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

const returnReactElement = () => {
  return <h2>Hello</h2>;
};

render(returnReactElement(), document.getElementById("root"));
