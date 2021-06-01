import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';

class App extends Component {
  render() {
    return (
    <div className="App">
      <EventList />
      <CitySearch />
      <NumberofEvents />
    </div>
    );
  }
}

export default App;
