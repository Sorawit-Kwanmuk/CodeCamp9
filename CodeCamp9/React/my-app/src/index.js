import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { Welcome, Greeting, PI } from "./component/Welcome";
// import * as W from "./component/Welcome";
// import MyComponent from "./component/Welcome";
import MyComponent, { Welcome, Greeting, PI } from "./component/Welcome";
// function App1() {
//   return <div>Hello React</div>;
// }
function App2() {
  return (
    <div>
      {/* <W.Welcome />
      <W.Greeting /> */}
      <Welcome />
      <Greeting />
      <MyComponent />
    </div>
  );
}
console.log(PI);
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
