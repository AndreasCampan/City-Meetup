import React, { useState } from 'react';

function NumberofEvents(props) {
  const [ eventsToShow, setEventsToShow ] = useState(props.eventsToShow);

  const handleChange = (event) => {

    if(event.target.value !== 0) {
      setEventsToShow(event.target.value);
      props.updateEventNum(event.target.value);
    } else {
      setEventsToShow(event.target.value);
      props.updateEventNum(event.target.value)
    }
  }

    return (
      <div className="numberOfEvents">
        <label htmlFor="number">Events per page: </label>
          <input 
          type="text" 
          id="number" 
          value={eventsToShow}
          placeholder="Type a number" 
          onChange={handleChange} />
       
      </div>
    )
}

export default NumberofEvents;