import React, { Component } from 'react'

class ResetBtn extends Component {
  render() {
    return (
      <button className='reset' onClick={this.props.handleReset}>
        Reset All
      </button>
    )
  }
}

export default ResetBtn
