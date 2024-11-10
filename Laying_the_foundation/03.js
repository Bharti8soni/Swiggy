import React from 'react';
import ReactDOM from 'react-dom/client';
//const heading = React.createElement("h1",{id:"heading"},"Namaste React!");

//JSX
//React Element
//const heading = <h1 id="head" className="root">H1 tag is created using JSX</h1>;
//NOTE: If I have to make this react element a functional component,first we have to change the 'h'of heading to'H'and then just make as a arrow function


//React component

/*const Title = () => (
<h1 className="head">
    This is title
    </h1>
);*/

//Putting one React component inside another React component
/*const number= 500;
const HeadingComponent = ()=>(
    <div id="container">
        <Title />
        {number}
        <h1 className="heading">This is the functional component</h1>
     </div>
);*/
//-------------------------------------------
//Putting React Element inside the React component


const Title = (
    <h1 className="head">
        This is title
        </h1>
    );

const number= 500;
const HeadingComponent = ()=>(
    <div id="container">
        {Title}
        {number}
        <h1 className="heading">This is the functional component</h1>
     </div>
);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);