// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

// upper camel case
const ReturnReactElement = props => {
  return (
    <h2>
      {props.name} / {props.music}
    </h2>
  );
};

// components <Hoge/>
render(
  <ReturnReactElement name="Nakanishi" music="jazz" />,
  document.getElementById("root")
);
