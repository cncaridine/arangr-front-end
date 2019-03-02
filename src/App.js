import React, { Component } from 'react';
import Form from './components/Form.js'
import Header from './components/Header.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'events',

    }
  }

  fetchEvents = () => {
    fetch('*******')
    .then(data => data.json())
    .then(jData => {
      console.log(jData);
    })
    .catch(err => console.log(err))
  }

  handleCreateEvent = (event) => {
    fetch('*****', {
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
      <div>
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default App;
