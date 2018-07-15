import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from 'views/Home';
import CreateOrg from 'views/CreateOrg';
import Profile from 'views/Profile';
import SignIn from 'views/SignIn';

import NavBar from "./components/NavBar";

import 'normalize.css/normalize.css';
import './App.css';

// bootstrap the initial data state
import demo_data from 'fake-data.json';

function createSub ({ amount, recurring, interval }) {
  return {
    id: demo_data.orgs.length, // temp crappy id maker
    amount,
    recurring,
    interval,
  }
}

const demo_user = {
  name: 'Gus Goodguy',
  subs: [
  // subs
    {
      id: 1,
      recurring: true,
      amount: 1, // in whole dollars
      interval: 'm', // monthly: m, quarterly: q
      total: 10,
      active: true
    }
  ],
  image: 'https://banner2.kisspng.com/20180404/lpe/kisspng-philip-j-fry-bender-leela-sticker-futurama-5ac54bcf3781d5.5554988315228794392274.jpg',
}


const WrappedRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      exact
      path={path}
      render={props => {
        return <Component {...props} {...rest} />;
      }}
    />
  );
};

class App extends Component {
  state = {
    orgs: demo_data.orgs,
    user: demo_user, 
  }

  update = (new_data) => {
    this.setState({
      ...new_data
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <WrappedRoute path="/" component={Home} ctx={this.state} update={this.update} />
        <WrappedRoute path="/create-org" component={CreateOrg} ctx={this.state} />
        <WrappedRoute path="/profile" component={Profile} ctx={this.state} />
        <WrappedRoute path="/signin" component={SignIn} ctx={this.state} />
      </div>
    );
  }
}

export default App;
