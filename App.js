import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");


// JSX - jsx is a syntax extension to js, it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string, it is jsx, it is a syntax extension to js which looks like html but it is not html, it is not string.
const jsxHeading= <h1 id="heading">Namaste React using JSX</h1>


// React Component - it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx.
// Class based component - it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx, it is a class which extends React.Component and has a render method which returns jsx.
// Functional component - it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx, it is a function which returns jsx.

const HeaderComponent=()=>{
    return <h1 id="heading">Namaste React heading Component with return statemnet</h1>
}

const HeaderComponentWithArrowFunction=()=><h2 id="heading">Namaste React heading Component with Arrow Function</h2>
const Title=()=> <h3>Namaste React Title Component</h3>
const elem=<h4>Namaste React h4 element</h4>

const BodyComponentWithMultipleLinesOfJSX=()=>(
    <div id="container">
        <HeaderComponent />
        <HeaderComponentWithArrowFunction />
        {Title()}
        {elem}
        <h3 id="body">Namaste React  body Component with component composition</h3>
    </div>
);









const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponentWithMultipleLinesOfJSX />);


