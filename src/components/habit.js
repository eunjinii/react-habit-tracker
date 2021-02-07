import React, { Component } from 'react'

class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncrement = (e) => {
    console.log(e)
  }

  render() {
    return (
      <li className='habit'>
        <span className='habitName'>Habit</span>
        <span className='habitCount'>{this.state.count}</span>
        <button className='habitButton habitIncrease' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square' />
        </button>
        <button className='habitButton habitDecrease'>
          <i className='fas fa-minus-square' />
        </button>
        <button className='habitButton habitDelete'>
          <i className='fas fa-trash' />
        </button>
      </li>
    )
  }
}

export default Habit
