import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from 'views/Home';
import CreateOrg from 'views/CreateOrg';
import Profile from 'views/Profile';
import SignIn from 'views/SignIn';

import NavBar from './components/NavBar';

import 'normalize.css/normalize.css';
import './App.css';

class App extends Component {
  // state = {
  //   orgs: data.orgs
  // };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/create-org" component={CreateOrg} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SignIn} />
      </div>
    );
  }
}

export default App;
