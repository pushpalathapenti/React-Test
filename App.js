import React from "react";
import ReactDOM from "react-dom/client";
//React Element => object => HTMLElement(render)

const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX-is not Html in js,its like Html or xml like syntax
//JSX(transpiling before it reaches the JS) - PArcel-Babel
//JSX => JSX => BABEL transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render).

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello Raj! JSX
  </h1>
);
//const data = api.getData();
//component composition
const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    {Title()}
    {/* <h2>{100 + 200}</h2> */}
    <h1>HEllo Everyone from react functional component</h1>
  </div>
);

// console.log(JsxHeading);
root.render(<HeadingComponent />);
