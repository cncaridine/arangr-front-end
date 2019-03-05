import React, {Component} from 'react'

class EventShow extends Component {
  render(){
    return(
      <div>
        {this.props.events ? <h1>{this.props.events.title}</h1> : ''}
        {this.props.events ? <img src="this.props.events.image"/> : ''}
        {this.props.events ? this.props.events.location : ''}
      </div>
    )
  }
}

export default EventShow;
