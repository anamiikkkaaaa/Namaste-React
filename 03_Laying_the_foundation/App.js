import React from "react";
import ReactDOM from "react-dom/client";

//Reat.createElement => Object => HTMLElement(render);

// const heading = React.createElement(
//     "h1", 
//     {id:"heading"}, 
//     "Create element heading"
// );

//jsx is not html in javascript but html like syntax
//this returns same object as createelement above
//attributes in jsx doesn't contain hyphen but written 
//in camel case instead
// if we have to write this in multiple lines
//wrap the code in round brackets
// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     React using JSX
//   </h1>
// );

//it is not valid javaScript per se
//js doesn't come with jsx inbuilt
//ECMAScript is what browser understands
//Parcel is doing the job behind the scene
//even before the code goes to the js engine
//the code is transpiled and then sent the code
//to the browser.
//Babel in Parcel does that
//Babel is an open source js compiler, transpiler
//behind the scene above jsx object is heading object

//console.log(jsxHeading); //you'll see in browser console
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

//React Component
//Class based component -old
//functional component - new

const Heading = () => (
  <h1 className="head" tabIndex="5">
  React using JSX
  </h1>
);

const HeadingComponen = () => {
    return <h1>Namaste React Functional Component</h1>;
}; //we may or may not write return
//if we are not writing return then 
//we'll have to use round brackets
//component rendering inside component
//component composition
const num = 1392;

const HeadingComponent = () => (
    <div id="container">
        <Heading/>
        <div>{num}</div>
        <h2>{console.log("in vs code terminal?, no apparently in browser console")}</h2>
        <h1 className="heading">without return fucntional component</h1>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);