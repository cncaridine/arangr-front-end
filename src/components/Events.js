import React, {Component} from 'react'
import EventInfo from './EventInfo.js'
class Events extends Component {

  render(){
    return(
      <div className="main-page">
      {this.props.events.map((events, index) => {
        return(
          <EventInfo
            key={index}
            events={events}
            arrayIndex={index}
            handleDelete={this.props.handleDelete}
          />
        )
      })}
      </div>
    )
  }
}

export default Events;
