import React, {Component} from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1><a href="/">Arang.r</a></h1>
        <h3>Find Your Next Event</h3>
        <a href="/new">Create New Event</a>
      </div>
    )
  }
}


export default Header;
