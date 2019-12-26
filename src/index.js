// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

const el = <h2>こんにちは世界</h2>;
console.log(el);

const title = "こんにちは世界タイトル";

const returnStrings = () => {
  return "文字列を返す";
};

const setComment = () => {
  return "コメント";
};

const reactElement = (
  <div className="el">
    <p>{returnStrings()}</p>
    <p>{setComment()}</p>
    <p>{Math.random()}</p>
    <h2>{title}</h2>
  </div>
);

render(reactElement, document.getElementById("root"));
