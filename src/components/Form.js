import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      image: '',
      date: '',
      time: 0,
      location: '',
      description: '',
      rsvp: false
    }
  }

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.handleCreateEvent(this.state)

  }

  clearForm = () => {
    this.setState({
      title: '',
      image: '',
      date: '',
      time: 0,
      location: '',
      description: '',
      rsvp: false
    })
  }
  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleChange}/> <br/>
          <input type="text" placeholder="location" value={this.state.location} name="location" onChange={this.handleChange}/> <br/>
          <input type="text" placeholder="date" value={this.state.date} name="date" onChange={this.handleChange}/><br/>
          <input type="text" placeholder="time" value={this.state.time} name="time" onChange={this.handleChange}/><br/>
          <input type="text" placeholder="image" value={this.state.image} name="image" onChange={this.handleChange}/><br/>
          <input type="textarea" placeholder="description" value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <button type="submit">Submit Event</button>
        </form>
      </div>
    )
  }
}

export default Form;
