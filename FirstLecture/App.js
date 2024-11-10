
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{id:"head"},"Hello world from React!");
console.log(heading);//object
//this heading is not a h1 tag.This is an React h1 element(React element is nothing but a normal javascript object)

//when we did React.createElement it basically creates a javascrip object(this is a react element it is not a h1 tag)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// render method is responsible for to take this object and converting into h1 tag which the browser understand and put that inside root