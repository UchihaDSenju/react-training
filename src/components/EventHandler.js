import React, {Component} from 'react'

// function ButtonClick(){

//     function clickHandler(){
//         console.log('Button CLicked')
//     }

//     return(
//         <div>
//             <button onClick={clickHandler}>Click Me</button> 
//         </div>
//     )
// }

class ButtonClick extends Component{

    clickHandler(){
        console.log("Button Clicked")
    }

    render(){
       return (
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
        </div>
       )
    }
}

export default ButtonClick

/* Common Errors that are made while doing this 
-> We did not add () paratnthesis in the onClick because if we do then it will become a function call
   which we do not want to happen if we do not add the () then it becomes just a function and not a function call*/