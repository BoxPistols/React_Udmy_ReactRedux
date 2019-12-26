// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

// upper camel case
const ReturnReactElement = ({ name, music }) => {
  return (
    <h2>
      {name} / {music}
    </h2>
  );
};

// components <Hoge/>
render(
  <ReturnReactElement name="Nakanishi" music="jazz" />,
  document.getElementById("root")
);
