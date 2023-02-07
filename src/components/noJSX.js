import React from "react";

const NoJsx=()=>{
    return React.createElement('div', {id: 'nJSX', className:'dummyClass'}, React.createElement('h1', null, 'No JSX used'))
}

export default NoJsx

// The reason why we import React is because whwnever we use JSX it then calls the createElement in the React Library