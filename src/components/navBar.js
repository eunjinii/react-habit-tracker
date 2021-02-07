import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>My Habits</div>
        <div>{this.props.total}</div>
      </React.Fragment>
    )
  }
}

export default NavBar
