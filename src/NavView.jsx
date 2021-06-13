import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class NavView extends Component {

  render() {

    return (
      <nav className="navbar">
        <div className="title">City Meetup</div>
        <div>
          <Link to="/City-Meetup" className="links">Home</Link>
          <Link to="/City-Meetup/Events" className="links">Events</Link>
          
        </div>
      </nav>
    );
  }
}

export default NavView;
