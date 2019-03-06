import React, {Component} from 'react'

class UpdateForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      id: this.props.events ? this.props.events.id : '',
      title: this.props.events ? this.props.events.title : '',
      image: this.props.events ? this.props.events.image : '',
      date: this.props.events ? this.props.events.date : '',
      time: this.props.events ? this.props.events.time : '',
      location: this.props.events ? this.props.events.location : '',
      description: this.props.events ? this.props.events.description : '',
      rsvp: this.props.events ? this.props.events.rsvp : ''
    }
  }

   updateTitle = (event) => {
     this.setState({
       title: event.target.value
     })
   }

   updateImage = (event) => {
     this.setState({
       image: event.target.value
     })
   }

   updateDate = (event) => {
     this.setState({
       date: event.target.value
     })
   }

   updateTime = (event) => {
     this.setState({
      time: event.target.value
     })
   }

   updateLocation = (event) => {
     this.setState({
       location: event.target.value
     })
   }

   updateDescription = (event) => {
     this.setState({
       description: event.target.value
     })
   }

   updateRsvp = (event) => {
     this.setState({
       rsvp: event.target.value
     })
   }

  render(){
    return(
      <div className="update-form">
      { this.props.events ?
        <form onSubmit={()=>this.props.handleEventUpdate(this.props.events)}>
        <h1>Update Form</h1>
        <label>Title</label><br/>
        <input
           type="text"
           placeholder={this.props.events.title}
           onChange={this.updateTitle}
           value={this.state.title}
         /><br/>
         <label>Location</label><br/>
         <input
           type="text"
           placeholder={this.props.events.location}
           onChange={this.updateLocation}
           value={this.state.location}
         /><br/>
         <label>Date</label><br/>
         <input
           type="text"
           placeholder={this.props.events.date}
           onChange={this.updateDate}
           value={this.state.date}
         /><br/>
         <label>Time</label><br/>
         <input
           type="number"
           placeholder={this.props.events.time}
           onChange={this.updateTime}
           value={this.state.time}
         /><br/>
         <label>Image</label><br/>
         <input
           type="text"
           placeholder={this.props.events.image}
           onChange={this.updateImage}
           value={this.state.image}
         /><br/>
         <label>Description</label><br/>
         <input
           type="text"
           placeholder={this.props.events.description}
           onChange={this.updateDescription}
           value={this.state.description}
         /><br/>
         <h4>RSVP</h4> <br/>
         <input
           type="checkbox"
           placeholder={this.props.events.rsvp}
           onChange={this.updateRsvp}
           value={this.state.rsvp}
         /><br/>
         <button type="submit">Submit Event</button>
         </form>
       : ''}
      </div>
    )
  }
}


export default UpdateForm;
