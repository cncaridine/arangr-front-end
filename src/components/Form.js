import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      event: '',
      rsvp: false
    }
  }

  handleChange = (event) => {
    this.setState({
      event: event.target.value
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
          <input type="text" placeholder="name" value={this.state.event.name} onChange={this.handleChange}/>
          <input type="text" placeholder="location" value={this.state.event.location} onChange={this.handleChange}/>
          <input type="text" placeholder="date" value={this.state.event.date} onChange={this.handleChange}/>
          <input type="text" placeholder="time" value={this.state.event.time} onChange={this.handleChange}/>
          <input type="text" placeholder="image" value={this.state.event.image} onChange={this.handleChange}/>
          <button type="submit">Submit Event</button>
        </form>
      </div>
    )
  }
}

export default Form;
