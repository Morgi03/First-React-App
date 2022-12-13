import React from 'react';
import logo from './logo.svg';
import './App.css';
import Szinvalto from './Szinvalto';

function App() {
  return (
    <div className="App">
      <Szinvalto text="Lorem ipsum szöveg" count={5}/>




      
      <br /><br /><br />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
