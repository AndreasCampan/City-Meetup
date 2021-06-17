import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import { extractLocations, getEvents, numFilter } from './api';
import FooterView from './FooterView'

class EventView extends Component {
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
    window.scrollTo(0, 0)
    this.mounted = true;
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
      <div className="event-content">
        <div className="title-box">
          <div className="title-main">CareerFoundry's Events</div>
        </div>
        <div className="filters">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <NumberofEvents eventsToShow={this.state.eventsToShow} updateEventNum={this.updateEventNum} text={this.state.errorText}/> 
        </div>
        <EventList events={this.state.numFilteredList}/>
        <FooterView />
      </div>
    );
  }
}

export default EventView;
