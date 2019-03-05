import React, {Component} from 'react'

class UpdateForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      title: this.props.events.title,
      image: this.props.events.image,
      date: this.props.events.date,
      time: this.props.events.time,
      location: this.props.events.location,
      description: this.props.events.description,
      rsvp: this.props.events.rsvp
    }
  }
  render(){
    return(
      <div className="update-form">
        <h1>Update Form</h1>
      </div>
    )
  }
}


export default UpdateForm;
