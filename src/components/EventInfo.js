import React, {Component} from 'react'

class EventInfo extends Component {

  render(){
    console.log(this.props);
    return(
      <div className="event-div">
        <h1>Name: {this.props.events.title}</h1>
        <img src={this.props.events.image} alt='event'/>
        <h1>Date: {this.props.events.date}</h1>
        <a href={this.props.events.id - 1 }>More Info</a><br/>
        <button onClick={()=> {
          this.props.handleDelete(this.props.events.id,
          this.props.arrayIndex,
          this.props.events
        )}}>Delete Event</button>
      </div>
    )
  }
}

export default EventInfo;
