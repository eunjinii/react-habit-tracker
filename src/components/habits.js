import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {
  handleCount = (habit, type) => {
    const habits = [...this.props.habits]
    const arrTemp = habits.map((item) => {
      if (item.id === habit.id) {
        type === 'plus' ? item.count++ : item.count > 0 && item.count--
      }
      return item
    })
    this.setState({ arrTemp })
  }

  handleDelete = (id) => {
    const habits = [...this.props.habits]
    const arrTemp = habits.filter((item) => item.id !== id)
    this.setState({ arrTemp })
  }

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={() => this.handleCount(habit, 'plus')}
            onDecrement={() => this.handleCount(habit, 'minus')}
            onDelete={() => this.handleDelete(habit.id)}
          />
        ))}
      </ul>
    )
  }
}

export default Habits
