import React, {Component} from 'react'

class EventShow extends Component {
  render(){
    return(
      <div className="show-div">
        {this.props.events ? <h1>{this.props.events.title}</h1> : ''}
        {this.props.events ? <img src={this.props.events.image} alt='event'/> : ''}<br/>
        {this.props.events ? this.props.events.location : ''}<br/>
        {this.props.events ? this.props.events.date : ''}<br/>
        {this.props.events ? this.props.events.time : ''}<br/>
        {this.props.events ? this.props.events.description : ''}<br/>
      </div>
    )
  }
}

export default EventShow;
