import React from "react";
const root = document.querySelector("#root");
const h1 = React.createElement(
  "h1",
  {
    id: "header",
    className: "header",
    style: {
      fontSize: "32px",
    },
  },
  "Hello My Friend"
);
const h2 = React.createElement(
  "p",
  {
    style: {},
  },
  "Friend List"
);
const li1 = React.createElement("li", {}, "John");
const li2 = React.createElement("li", {}, "Jack");
const li3 = React.createElement("li", {}, "Jane");
const ul = React.createElement("ul", {}, li1, li2, li3);
const div = React.createElement(
  "div",
  {
    className: "container",
  },
  h1,
  h2,
  ul
); //<div class="container">
ReactDOM.render(div, document.getElementById("root"));
