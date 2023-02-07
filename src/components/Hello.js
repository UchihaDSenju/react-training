import React from "react";

//The below is a demonstration of a functional component

// function Hello(){
//     return <h1>Hello Dudes</h1>
// }
const Hello = () => {
    return(<h1>Hello Dude</h1>)
}//-> ES6 Format
export default Hello;
//When we use this export then we can import it in any name 
//Check the named export method in Hello2.js
//The above export is called the default export