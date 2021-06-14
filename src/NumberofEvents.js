import React, { useState } from 'react';
import { ErrorAlert} from './Alert'; 

function NumberofEvents(props) {
  const [ eventsToShow, setEventsToShow ] = useState(props.eventsToShow);
  const text = props.text

  const handleChange = (event) => {

    if(event.target.value === "") {
      setEventsToShow(event.target.value);
      props.updateEventNum("NoNum");
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
          className="numberInput"
          value={eventsToShow}
          placeholder="#" 
          onChange={handleChange} />
       <ErrorAlert text={text}/>
      </div>
    )
}

export default NumberofEvents;