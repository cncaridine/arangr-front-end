import React, {Component} from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1><a href="/">Arang.r</a></h1>
        <a href="/new">Create New Event</a>
      </div>
    )
  }
}


export default Header;
