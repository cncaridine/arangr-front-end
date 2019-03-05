import React, {Component} from 'react'

class EventInfo extends Component {

  render(){
    console.log(this.props);
    return(
      <div>
        <h1>{this.props.events.title}</h1>
      </div>
    )
  }
}

export default EventInfo;
