import React from 'react';
import logo from './logo.svg';
import './App.css';
import BtnComponent from './btnComponent';

function App(){
  const sayHello = () => {
    console.log("Hey, nice code.");
  }

  return(
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Click me</button>
      <BtnComponent />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
