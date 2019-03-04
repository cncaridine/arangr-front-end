import React, {Component} from 'react'
import EventInfo from './EventInfo.js'
class Events extends Component {

  render(){
    return(
      <div>
      <h1> this is the main page</h1>
      {this.props.events.map((index, events) => {
        return(
          <EventInfo
            key={index}
            events={events}
            arrayIndex={index}
          />
        )
      })}
      </div>
    )
  }
}

export default Events;
