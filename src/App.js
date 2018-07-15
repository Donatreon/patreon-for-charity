import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from 'views/Home'
import CreateOrg from 'views/CreateOrg'
import OrgDetails from 'views/OrgDetails'
import SignUp from 'views/SignUp'

import Grid from './components/Grid';
import NavBar from './components/NavBar';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/create-org" component={CreateOrg} />
        <Route path="/org-details" component={OrgDetails} />
        <Route path="/signup" component={SignUp} />
        <Grid />
      </div>
    );
  }
}

export default App;
