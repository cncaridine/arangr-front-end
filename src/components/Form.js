import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      eventVar: '',
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
      eventVar: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.handleCreateEvent(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      event: ''
    })
  }
  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" placeholder="location" value={this.state.location} onChange={this.handleChange}/>
          <input type="text" placeholder="date" value={this.state.date} onChange={this.handleChange}/>
          <input type="text" placeholder="time" value={this.state.time} onChange={this.handleChange}/>
          <input type="text" placeholder="image" value={this.state.image} onChange={this.handleChange}/>
          <button type="submit">Submit Event</button>
        </form>
      </div>
    )
  }
}

export default Form;
