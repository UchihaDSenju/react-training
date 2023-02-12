import React, {Component} from "react";

class State extends Component{

    // constructor(){ // Special function in javascript that creates and initializes an object instance of a class 
    //     super() // It references to the constructor of the parent class to access parent properties and methods, Here it is the Component class to implement
    //     this.state = {// State is a reserved keyword in React and this is used because we are in a class
    //         PlaceName : "Disney World"
    //     }
    // } This is an old Method
    state = {PlaceName : "Disney World"}

    changeName(){
        this.setState({ //We call the Set State method so that we can change the state object and it tells react to re-render it by calling the render() method
            PlaceName : "World of Animation"
        })
    }

    render(){
        return(
            <div>
                <h1>Hello and Welcome to {this.state.PlaceName} </h1>
                <button onClick={() => this.changeName()}>Click Here to Change Name</button>
            </div>
        )
    }
}
export default State

// setSttate({state Object},{call back function}) ~~syntax
// Since setState() is asynchronous a callback function is called after executing the state object changes
// So if you want to execute something after a setState method the do it using the second parameter
// If you want to update the state based on previous state then make sure to pass the function as the argument instead of the object