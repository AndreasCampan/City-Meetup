import React from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import { mockData } from './mock-data';

function App() {
  let events = mockData
  return (
    <div className="App">
      <EventList events={events}/>
      <CitySearch />
      <NumberofEvents />
    </div>
  );
}

export default App;
