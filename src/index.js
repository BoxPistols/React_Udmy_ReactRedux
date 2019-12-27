// index.js
import React from "react";
import { render } from "react-dom";
import {} from "./styles.css";
// import { ReactComponent } from "./module";
// import ClassComp1 from "./module";
import { ReactComponent } from "./ReactComponent";
// render(
//   <div>
//     <ReactComponent />
//     <ClassComp1 />
//   </div>,
//   document.getElementById("root")
// );

render(
  <ReactComponent name="高橋" music="ロック" />,
  document.getElementById("root")
);
