import React, {Component} from "react";

// const FunctionalProps = (props) => { //props is the standard naming convention
//     console.log(props)//Check this in browser
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             {props.children}
//         </div>
//         )
// }

class ClassProps extends Component{
    render(){
        return(
        <div>
            <h1>Hello {this.props.name}</h1>
            {this.props.children}
        </div>
        )
    }
}

export default ClassProps // Change the target Export according to the component used