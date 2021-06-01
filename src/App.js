import React from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';

function App() {
  return (
    <div className="App">
      <EventList />
      <CitySearch />
      <NumberofEvents />
    </div>
  );
}

export default App;
