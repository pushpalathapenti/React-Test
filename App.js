/**  nested html structure
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 *   <div id="child2">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm Raj"),
    React.createElement("h2", {}, "I'm a Full Stack Developper"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "NAmaste"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

//due to this code is untidy, unmaintanable
console.log(parent);
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
