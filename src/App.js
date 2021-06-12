import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
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
        <Route path="/" render={() => {
          return (
            <>
              <NavView />
              <HomeView />
            </>
          )
        }} />

        <Route path="/login" render={() => {
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
