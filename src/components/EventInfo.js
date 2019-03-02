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

    )
  }
}
