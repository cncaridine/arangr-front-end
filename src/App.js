import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Form from './components/Form.js'
import Header from './components/Header.js'
import EventInfo from './components/EventInfo.js'
import Events from './components/Events.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'events',

    }
  }

  fetchEvents = () => {
    fetch('http://localhost:3000/arangr')
    .then(data => data.json())
    .then(jData => {
      console.log(jData);
    })
    .catch(err => console.log(err))
  }

  handleCreateEvent = (event) => {
    fetch('http://localhost:3000/arangr', {
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

  changeView = () => {
    this.setState({
      currentView: 'event'
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path='/' render={(props)=> <Header/>}/>
        <Route path='/' render={(props)=> <Events/>} exact/>
        <Route path='/submit' render={(props)=> <Form handleCreateEvent={this.handleCreateEvent}/>}/>
        <Route path='/event-info' render={(props)=> <EventInfo/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
