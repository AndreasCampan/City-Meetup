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
    window.addEventListener("resize", function() {
      const desktopMenu = document.querySelector(".mylinks");
      if(document.body.clientWidth >= 650){
      desktopMenu.style.transform = "translateY(0px)"
      desktopMenu.style.display = "flex"
    } else {
      desktopMenu.style.display = "none"
      desktopMenu.style.transform = "translateY(-160px)"
      setTimeout(() => {desktopMenu.style.display = "flex"}, 200)
      
    }
  })
  }
  
  componentDidUpdate(){
    this.extraNav()
  }

  mobileMenu() {
    let desktopMenu = document.querySelector(".mylinks");
    if(this.state.show === false){
      this.setState({
        show: true
      })
      desktopMenu.style.transform = "translateY(0px)"
      
    } else {
      desktopMenu.style.transform = "translateY(-160px)"
      this.setState({
        show: false
      })
    }
  }

  extraNav(){
    const link = document.getElementById("eventLink");
      const sign = document.getElementById("signout");
    if(this.props.fullNav === false){
      link.style.display = "none"
      sign.style.display = "none"
    } else {
      link.style.display = "inline"
      sign.style.display = "inline"
    }    
  }
  
  render() {
    return (
      <nav>
        <div className="navbar"></div>
        <a href="https://andreascampan.github.io/City-Meetup/" className="Nav-title"><h1>City-Meetup</h1></a>
        <button title="hamburger menu button" className="mobile-menu-bttn" onClick={() => {this.mobileMenu();}}>
          <div className="mobilebar-one"></div>
          <div className="mobilebar-two"></div>
          <div className="mobilebar-three"></div>
        </button>
        
        <div className="mylinks">
          <Link to="/City-Meetup/" className="links" title="" >Home</Link>
          <Link to="/City-Meetup/Events" className="links" id="eventLink">Events</Link>
          <button className="links" id="signout" onClick={()=>{this.props.signOut();}}>Sign Out</button>
        </div>
      </nav>
    );
  }
}

export default NavView;
