import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import EventView from './EventView';
import HomeView from './HomeView';
import NavView from './NavView';
import FooterView from './FooterView';


class App extends Component {

  render() {

    return (
      <Router>
        <Route exact path="/City-Meetup" render={() => {
          return (
            <>
              <NavView />
              <HomeView />
              <FooterView />
            </>
          )
        }} />
        <Route exact path="/City-Meetup/Events" render={() => {
          return (
            <>
              <NavView />
              <EventView />
            </>
          )
        }} />
      </Router>
    );
  }
}

export default App;
