import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import LoginView from './LoginView';
import HomeView from './HomeView';
import NavView from './NavView';


class App extends Component {
  state = {
    user: false
  }

  render() {

    return (
      <Router>
        <Route exact path="/City-Meetup" render={() => {
          return (
            <>
              <NavView />
              <HomeView />
            </>
          )
        }} />
        <Route exact path="/City-Meetup/Events" render={() => {
          return (
            <>
              <NavView />
              <LoginView />
            </>
          )
        }} />
      </Router>
    );
  }
}

export default App;
