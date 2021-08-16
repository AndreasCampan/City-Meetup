import React, { Component } from 'react';
import './App.css';
import logo1 from './img/AC-Logo.png'
import logo2 from './img/github-logo.png'


class FooterView extends Component {

  render() {
    
    return (
      <footer className="footer">
        <div className="logos">
          <a href="https://www.andreascampan.com/" rel="noreferrer" alt="Link leading to the Creators Portfolio website" target="_blank">
            <img src={logo1} alt="Logo for Portfolio websites" className="logo1" />
          </a>
          <a href="https://github.com/AndreasCampan/City-Meetup" rel="noreferrer" alt="Link leading to this websites repository on github" target="_blank">
            <img src={logo2} alt="Logo for github " className="logo2" />
          </a>
        </div>
      </footer>
    );
  }
}

export default FooterView;
