import React, { Component } from 'react'

class SubmitForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type='text' value={this.props.text} onChange={this.props.handleInput} />
        <button>Submit!</button>
      </form>
    )
  }
}

export default SubmitForm
