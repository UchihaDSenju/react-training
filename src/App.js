// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import { Hellos } from './components/Hello2';//named export
import Hello3 from './components/Hello3'
import NoJsx from './components/noJSX';
import Heading from './components/Heading';
import Props from './components/Props';
import State from './components/States';
import ButtonClick from './components/EventHandler';

function App() {
  return (
    <div className="App">
     <Hello />{/*functional component*/}
     <Hellos />{/* named exports cannot be used with a different name but with the function name only */}

    {/*Class Component*/}
    <Hello3 />
    <NoJsx />

    <Heading title="PROPS"/>

    <Props name="Tariq">
      <p>This is a child element that can be rendered using the props</p>
    </Props>
    
    <State />

    <ButtonClick />
    </div>
  );
}

export default App;

// use functional component as much as possible
// because it has the absense of 'this' keyword which is difficult to undestand
// They are called stateless components
//Class Componets are 
