import React, { Component } from 'react';
import './App.css';

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import EventGenre from './EventGenre';
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
        <h3 className="title-1">Events in each city</h3>

        <div className="data-vis-wrapper">
          <EventGenre events={numFilteredList}/>
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20 }} >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="Number of Events" />
              <ZAxis range={[150, 600]} />
              <Tooltip cursor={{ stroke: 'red', strokeWidth: 5 }}/>
              <Scatter data={this.props.getData()} fill="#d61313" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={numFilteredList}/>
        <FooterView />
      </div>
    );
  }
}

export default EventView;
