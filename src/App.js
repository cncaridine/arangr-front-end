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
    .then(jData =>{ this.setState({
      events: jData
    })
    console.log(jData);
  })
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
      console.log('==========');
      console.log(prevState['events']);
      console.log(array);
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
      this.removeFromArray('events', arrayIndex)
    })
    .catch(err => console.log(err))
  }

  handleEventUpdate = (events, props, arrayIndex, array) => {

    fetch(`https://arangr-api.herokuapp.com/arangr/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify(events),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then((updatedEvent) => {
      console.log(updatedEvent);
      return updatedEvent.json()
    })
    .then((jData) => {
      console.log(jData);
    })
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
          <Route exact path='/:id' render={({match})=> <EventShow fetchEvents={this.fetchEvents}
          events={this.state.events[match.params.id]}/>}/>
          <Route path='/update/:id' render={({match})=> <UpdateForm events={this.state.events[match.params.id]}
          handleEventUpdate={this.handleEventUpdate}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
