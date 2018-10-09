import React, { Component } from 'react';
import './App.css';
import MainCard from './components/main-card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" />
          <h1 className="App-title">Tom's Kitchen</h1>
        </header>
        <p className="App-intro">
          <MainCard />
        </p>
      </div>
    );
  }
}

export default App;
