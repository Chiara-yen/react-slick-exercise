import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSlickDemo from './ReactSlickDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React Slick Demo</h2>
          <p>press key &larr; &uarr; &rarr; &darr;</p>
        </div>
        <ReactSlickDemo />
      </div>
    );
  }
}

export default App;
