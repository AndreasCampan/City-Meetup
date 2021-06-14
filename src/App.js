import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import { extractLocations, getEvents, numFilter } from './api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      eventsToShow: 32,
      eventsLocFilt: [],
      numFilteredList: [],
      errorText: ''
    }
  }

  componentDidMount() {
    this.mounted= true;
    getEvents()
    .then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events,
          numFilteredList: events.slice(0, 32), 
          locations: extractLocations(events) });
      }
    });
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
    if (num >= 0 & num <= 50) {
      this.setState({
        errorText: ''
      })
     } else if(!num) {
     this.setState({
       errorText: 'Please enter a number'
     })
    } else if (num > 50) {
      this.setState({
        errorText: 'Max 50 events'
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
    } else if(num > 50) {
      this.setState({
        eventsToShow: num,
        numFilteredList: numFilter(this.state.events, num)
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
      <div className="content">
        <div className="filters">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <NumberofEvents eventsToShow={this.state.eventsToShow} updateEventNum={this.updateEventNum} text={this.state.errorText}/>
        </div>
        <div className="eventbox">
          <EventList events={this.state.numFilteredList}/>
        </div>
      </div>
    );
  }
}

export default App;
