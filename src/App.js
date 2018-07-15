import React, { Component } from 'react';
import Grid from './components/Grid';
import NavBar from './components/NavBar';

// import logo from './logo.svg';
import 'normalize.css/normalize.css';
import './App.css';
import data from './fake-data.json';

class App extends Component {
  state = {
    orgs: data.orgs
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Grid />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
