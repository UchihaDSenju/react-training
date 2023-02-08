import React, {Component} from "react";

class State extends Component{

    constructor(){ // Special function in javascript that creates and initializes an object instance of a class 
        super() // It references to the constructor of the parent class to access parent properties and methods, Here it is the Component class
        this.state = {// State is a reserved keyword in React and this is used because we are in a class
            PlaceName : "Disney World"
        }
    }

    changeName(){
        this.setState({
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