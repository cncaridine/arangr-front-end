import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Form from './components/Form.js'
import Header from './components/Header.js'
import EventInfo from './components/EventInfo.js'
import Events from './components/Events.js'
import EventShow from './components/EventShow.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }

  fetchEvents = () => {
    fetch('http://localhost:3000/arangr')
    .then(data => data.json())
    .then(jData => this.setState({
      events: jData
    }))
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

  // handleDelete = (eventId) => {
  //   fetch(`http://localhost3000/arangr/${event-id}`)
  // }

  componentDidMount(){
    this.fetchEvents()
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' render={(props)=> <Header/>}/>
          <Route path='/' render={(props)=> <Events events={this.state.events}/>} exact/>
          <Route path='/submit' render={(props)=> <Form handleCreateEvent={this.handleCreateEvent}/>}/>
          <Route path='/event-info/' render={(props)=> <EventInfo events={this.state.events}/>}/>
          <Route path='/:id' render={({match})=> <EventShow events={this.state.events[match.params.id]}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
