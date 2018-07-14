import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Patreon For Charity</h1>
        </header>
        <p className="App-intro">
          Making it easy to donate regularly to your favorite charity!
        </p>
      </div>
    );
  }
}

export default App;
