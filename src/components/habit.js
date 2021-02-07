import React, { Component } from 'react'

class Habit extends Component {
  render() {
    const { name, count } = this.props.habit
    const { onIncrement, onDecrement, onDelete } = this.props

    return (
      <li className='habit'>
        <span className='habitName'>{name}</span>
        <span className='habitCount'>{count}</span>
        <button className='habitButton habitIncrease' onClick={onIncrement}>
          <i className='fas fa-plus-square' />
        </button>
        <button className='habitButton habitDecrease' onClick={onDecrement}>
          <i className='fas fa-minus-square' />
        </button>
        <button className='habitButton habitDelete' onClick={onDelete}>
          <i className='fas fa-trash' />
        </button>
      </li>
    )
  }
}

export default Habit
