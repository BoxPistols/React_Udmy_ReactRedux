// // index.js
// import React from "react";
// import { render } from "react-dom";
// import {} from "./styles.css";

// const el = <h2>こんにちは世界</h2>;
// console.log(el);

// const title = "こんにちは世界タイトル";

// const returnStrings = () => {
//   return "文字列を返す";
// };

// const setComment = () => {
//   return "コメント";
// };

// const reactElement = (
//   <div className="el">
//     <p>{returnStrings()}</p>
//     <p>{setComment()}</p>
//     <p>{Math.random()}</p>
//     <h2>{title}</h2>
//   </div>
// );

// render(reactElement, document.getElementById("root"));

// 従来の関数
function name1() {
  console.log("none");
}
name1();

// アロー関数
const name2 = () => {
  console.log("name2!");
};
name2();

// 引数
const name3 = val => {
  console.log(val);
};
name3("pass value");

// 引数が一つの時は()の省略が可能
const name4 = val => {
  console.log(val);
};
name4("pass value4");

// 引数が複数の時は()は必要
const name5 = (val1, val2) => {
  console.log(val1, val2);
};
name5("arg1", "arg2");

// 仮引数と返り値
const name6 = () => {
  return "return value";
};
console.log(name6());

// 返り値 省略記法
const name7 = () => "return 7";
console.log(name7());

// 先に内容記述
const name8 = () => console.log("name8");
name8();
