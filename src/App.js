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

  componentDidMount(){
    window.scrollTo(0, 0)
    this.mounted = true;

    const token = localStorage.getItem("access_token");
    if(token){
     this.setState({fullNav: true});
     this.login();
    }
    
    if(window.location.href.indexOf('code') !== -1){
      this.changeNav()
      this.login();
      ;
    }
  }

  changeNav(){
    if(this.state.fullNav === false){
      if(this.state.events.length === 0){
      setTimeout(() => {this.setState({fullNav: true})}, 1000)
      } else {
        this.setState({fullNav: true})
      }
    } else {
      this.setState({fullNav: false})
    }
  }

  signOut = () => {
    localStorage.removeItem('locations');
    localStorage.removeItem('access_token');
    localStorage.removeItem('lastEvents');
    this.setState({
      events: [],
      locations: [],
      eventsToShow: 32,
      eventsLocFilt: [],
      numFilteredList: [],
      errorText: '',
      fullNav: false
    })
    return window.location = '/City-Meetup';
  }

  getData = () => {
    const { locations, numFilteredList } = this.state;
    const data = locations.map((location)=>{
      const number = numFilteredList.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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
        eventsToShow: 0,
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
        <Route exact path="/City-Meetup/" render={() => {
          return (
            <>
              <NavView fullNav={this.state.fullNav} signOut={this.signOut} />
              <HomeView login={()=>{this.login()}} changeNav={()=>{this.changeNav()}} fullNav={this.state.fullNav} />
              <FooterView />
            </>
          )
        }} />
        
        <Route exact path="/City-Meetup/Events" render={() => {
          return (
            <>
              <NavView fullNav={this.state.fullNav} signOut={this.signOut}/>
              <EventView state={this.state} updateEvents={this.updateEvents} updateEventNum={this.updateEventNum} login={this.login} getData={this.getData}/>
            </>
          )
        }} />
      </Router>
    );
  }
}

export default App;
