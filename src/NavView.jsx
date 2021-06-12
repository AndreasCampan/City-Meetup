import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class NavView extends Component {

  render() {

    return (
      <nav className="navbar">
        <div className="title">City Meetup</div>
        <div>
          <Link to="/" className="links">Home</Link>
          <a href="https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=862324072956-evu63h9m5ub56el623obi4jkr4c9iils.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fandreascampan.github.io%2FCity-Meetup%2F&flowName=GeneralOAuthFlow" className="links">Login</a>
        </div>
      </nav>
    );
  }
}

export default NavView;
