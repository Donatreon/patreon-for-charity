import React, { Component } from 'react';

import {
  // BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Home from 'views/Home'
import CreateOrg from 'views/CreateOrg'
import OrgDetails from 'views/OrgDetails'
import SignUp from 'views/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <Route exact path="/" component={Home}/>
        <Route path="/create-org" component={CreateOrg}/>
        <Route path="/org-details" component={OrgDetails}/>
        <Route path="/signup" component={SignUp}/>
      </div>
    );
  }
}

export default App;
