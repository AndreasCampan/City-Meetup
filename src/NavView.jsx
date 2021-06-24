import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class NavView extends Component {
  constructor(){
    super();
    this.state = {
      show: false
    }
  }
  componentDidMount(){
    this.extraNav()
  }
  
  componentDidUpdate(){
    this.extraNav()
  }

  mobileMenu() {
    let desktopMenu = document.querySelector(".mylinks");
    console.log(this.state.show)
    if(this.state.show === false){
      this.setState({
        show: true
      })
      desktopMenu.style.transform = "translateY(0px)"
      
    } else {
      console.log('In here')
      desktopMenu.style.transform = "translateY(-160px)"
      this.setState({
        show: false
      })
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
      <nav>
        <div className="navbar"></div>
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
