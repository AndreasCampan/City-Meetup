import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class NavView extends Component {

  componentDidMount(){
    this.extraNav()
  }
  
  componentDidUpdate(){
    this.extraNav()
  }

  mobileMenu() {
    let desktopMenu = document.querySelector(".mylinks");

    if(desktopMenu.style.display === "flex"){
      desktopMenu.style.display = "none"
    } else {
      desktopMenu.style.display = "flex"
    }
  }

  extraNav(){
    if(this.props.fullNav === false){
      const link = document.getElementById("eventLink");
      link.style.display = "none"
    } else {
      const link = document.getElementById("eventLink");
      link.style.display = "inline"
    }
  }
  
  render() {
    return (
      <nav className="navbar">
        <div className="Nav-title"><h1>City-Meetup</h1></div>
        <button className="mobile-menu-bttn" onClick={() => {
          this.mobileMenu();
        }}>
          <div className="mobilebar-one"></div>
          <div className="mobilebar-two"></div>
          <div className="mobilebar-three"></div>
        </button>
        <div className="mylinks">
          <Link to="/City-Meetup/" className="links">Home</Link>
          <Link to="/City-Meetup/Events" className="links" id="eventLink">Events</Link>
        </div>
      </nav>
    );
  }
}

export default NavView;
