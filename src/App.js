import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Form from './components/Form.js'
import Header from './components/Header.js'
import Events from './components/Events.js'
import EventShow from './components/EventShow.js'
import UpdateForm from './components/UpdateForm.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }

  fetchEvents = () => {
    fetch('https://arangr-api.herokuapp.com/arangr')
    .then(data => data.json())
    .then(jData => this.setState({
      events: jData
    }))
    .catch(err => console.log(err))
  }

  handleCreateEvent = (event) => {
    fetch('https://arangr-api.herokuapp.com/arangr', {
      body: JSON.stringify(event),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdEvent => {
      return createdEvent.json()
    })
    .catch(err =>console.log(err))
  }

  removeFromArray = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  handleDelete = (id, arrayIndex, array) => {
    fetch(`https://arangr-api.herokuapp.com/arangr/${id}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray(array, arrayIndex)
    })
    .catch(err => console.log(err))
  }

  updateEvent = (events) => {
    this.setState()
  }

  componentDidMount(){
    this.fetchEvents()
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={(props)=> <Header/>}/>
          <Route path='/' render={(props)=> <Events events={this.state.events} handleDelete={this.handleDelete}/>} exact/>
          <Route path='/new' render={(props)=> <Form handleCreateEvent={this.handleCreateEvent}/>}/>
          <Route path='/:id' render={({match})=> <EventShow events={this.state.events[match.params.id]}/>}/>
          <Route path='/update' render={(props)=> <UpdateForm events={this.state.events}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
