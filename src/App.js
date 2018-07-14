import React, { Component } from 'react';
import './App.css';

import Header from 'components/Header/Header.jsx';
import NavPills from 'components/NavPills/NavPills'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          color="info"
          brand="Charitreonly"
          leftLinks={<h2>Donately</h2>}
          rightLinks={<h4>Sign In</h4>}
        />
        <NavPills
     tabs={[
      {
        tabButton: "Profile",
        tabContent: (
          <span>
            <p>
              Collaboratively administrate empowered markets via
              plug-and-play networks. Dynamically procrastinate
              B2C users after installed base benefits.
            </p>
            <br />
            <p>
              Dramatically visualize customer directed convergence
              without revolutionary ROI. Collaboratively
              administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after
              installed base benefits.
            </p>
            <br />
            <p>This is very nice.</p>
          </span>
        )
      },
      {
        tabButton: "Settings",
        tabContent: (
          <span>
            <p>
              Efficiently unleash cross-media information without
              cross-media value. Quickly maximize timely
              deliverables for real-time schemas.
            </p>
            <br />
            <p>
              Dramatically maintain clicks-and-mortar solutions
              without functional solutions.
            </p>
          </span>
        )
      },
      {
        tabButton: "Options",
        tabContent: (
          <span>
            <p>
              Completely synergize resource taxing relationships
              via premier niche markets. Professionally cultivate
              one-to-one customer service with robust ideas.{" "}
            </p>
            <br />
            <p>
              Dynamically innovate resource-leveling customer
              service for state of the art customer service.
            </p>
          </span>
        )
      }
    ]} 
    />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
