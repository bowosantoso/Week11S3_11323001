import React, { Component } from 'react';
import Calculator from './Calculator.js';
import TimeMachine from './TimeMachine.js'; // Mengimport komponen TimeMachine
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My React App</h1>
        <Calculator />
        <TimeMachine /> {/* Menambahkan komponen TimeMachine */}
      </div>
    );
  }
}

export default App;
