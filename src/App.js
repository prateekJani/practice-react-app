import React from 'react';
import logo from './logo.svg';
import './App.css';

import Prateek from './Components/Prateek/Prateek';
import NewComponent from './Components/NewComponent/NewComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>asdasd 1 2 3</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a>

        <Prateek />
        <NewComponent />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
