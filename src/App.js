import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { extractLocations, getEvents, numFilter } from './api';

import EventView from './EventView';
import HomeView from './HomeView';
import NavView from './NavView';
import FooterView from './FooterView';


class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      eventsToShow: 32,
      eventsLocFilt: [],
      numFilteredList: [],
      errorText: '',
      fullNav: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.mounted = true;
    if(window.location.href.indexOf('code') !== -1){
      this.changeNav()
      this.login();
      ;
    }
  }

  async changeNav(){
    if(this.state.fullNav === false){
      await this.setState({fullNav: true});
    } else {
      await this.setState({fullNav: false});
    }
  }

  login(){
    getEvents()
    .then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events,
          numFilteredList: events.slice(0, 32), 
          locations: extractLocations(events) });
      }
    })
    .catch((error) => {console.log(error)});
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  
  updateEvents = (location) => {
    const locationEvents = (location === 'all') ?
      this.state.events :
      this.state.events.filter((event) => event.location === location);
    this.setState({ 
      eventsLocFilt: locationEvents,
      numFilteredList: numFilter(locationEvents, this.state.eventsToShow)});
  }

  updateEventNum = (num) => {
    if (num >= 0 & num <= 60) {
      this.setState({
        errorText: ''
      })
     } else if(num === "NoNum") {
     this.setState({
       errorText: 'Please enter a number'
     })
    } else if (num > 60) {
      this.setState({
        errorText: 'Max 60 events'
      })
    } else {
      this.setState({
        errorText: 'Please enter a valid number'
      })
    }

    if(this.state.eventsLocFilt.length !== 0){
      this.setState({
        eventsToShow: num,
        numFilteredList: numFilter(this.state.eventsLocFilt, num)
      });
    } else if(num > 60) {
      this.setState({
        eventsToShow: num,
        numFilteredList: numFilter(this.state.events, 0)
      });
    } else {
      this.setState({
        eventsToShow: num,
        numFilteredList: numFilter(this.state.events, num)
      });
    }
  }

  render() {

    return (
      <Router>
        <Route exact path="/City-Meetup" render={() => {
          return (
            <>
              <NavView fullNav={this.state.fullNav} />
              <HomeView login={()=>{this.login()}} changeNav={()=>{this.changeNav()}} fullNav={this.state.fullNav} />
              <FooterView />
            </>
          )
        }} />
        
        <Route exact path="/City-Meetup/Events" render={() => {
          return (
            <>
              <NavView fullNav={this.state.fullNav}/>
              <EventView state={this.state} updateEvents={()=>{this.updateEvents()}} updateEventNum={()=>{this.updateEventNum()}} login={()=>{this.login()}} />
            </>
          )
        }} />
      </Router>
    );
  }
}

export default App;
