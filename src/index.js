// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";

// const returnReactElement = () => {
//   return <h2>Hello-1</h2>;
// };

// const returnReactElement2 = () => <h2>Hello-2</h2>;

// const returnReactElement3 = hello3 => <h2>{hello3}</h2>;

const returnMemberInfo = (id, name) => {
  // const newStrings = id + ":" + name;
  const newStrings = `${id}番目:${name}さん`;
  return <h2>{newStrings}</h2>;
};

render(returnMemberInfo("#1", "Yamada"), document.getElementById("root"));
