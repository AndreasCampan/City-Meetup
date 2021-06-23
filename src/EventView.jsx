import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import FooterView from './FooterView'

class EventView extends Component {

  updateEventNum(){
    this.props.updateEventNum();
  }

  render() {

    const { locations, eventsToShow, numFilteredList, errorText } = this.props.state

    return (
      <div className="event-content">
        <div className="title-box">
          <div className="title-main">CareerFoundry's Events</div>
        </div>
        <div className="filters">
          <CitySearch locations={locations} updateEvents={()=>{this.props.updateEvents()}} />
          <NumberofEvents eventsToShow={eventsToShow} updateEventNum={()=>{this.updateEventNum()}} text={errorText}/> 
        </div>
        <EventList events={numFilteredList}/>
        <FooterView />
      </div>
    );
  }
}

export default EventView;
