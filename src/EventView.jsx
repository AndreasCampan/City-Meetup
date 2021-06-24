import React, { Component } from 'react';
import './App.css';

import EventGenre from './EventGenre';
import EventChart from './EventChart';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import FooterView from './FooterView'

import { InfoAlert} from './Alert';

class EventView extends Component {
  state = {
    infoText:''
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (!navigator.onLine) {
      this.setState({
        infoText:
          'You are currently offline. Data will not be updated!',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  }
  
  render() {

    const { locations, eventsToShow, numFilteredList, errorText } = this.props.state

    return (
      <div className="event-content">
        <div className="title-box">
          <div className="title-main">CareerFoundry's Events</div>
        </div>
        <InfoAlert text={this.state.infoText}/>
        <div className="filters">
          <CitySearch locations={locations} updateEvents={this.props.updateEvents} />
          <NumberofEvents eventsToShow={eventsToShow} updateEventNum={this.props.updateEventNum} text={errorText}/> 
        </div>

        <div className="data-vis-wrapper">
          <div className="chart1-box">
            <EventGenre events={numFilteredList}/>
          </div>
          <div className="chart2-box">
           <EventChart state={this.props.state} getData={this.props.getData}/>
          </div>
        </div>
        <EventList events={numFilteredList} />
        <FooterView />
      </div>
    );
  }
}

export default EventView;
