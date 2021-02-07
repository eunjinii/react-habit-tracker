import React, { Component } from 'react'
import './app.css'
import Habits from './components/habits'
import NavBar from './components/navBar'
import ResetBtn from './components/resetBtn'
import SubmitForm from './components/submitForm'

class App extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: 'Reading',
        count: 2,
      },
      {
        id: 2,
        name: 'coding',
        count: 1,
      },
      {
        id: 3,
        name: 'running',
        count: 2,
      },
    ],
    text: '',
    total: 0,
  }

  handleInput = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newHabit = {
      id: this.state.habits.length + 1,
      name: this.state.text,
      count: 0,
    }
    this.setState({
      habits: [...this.state.habits, newHabit],
      text: '',
    })
  }

  handleReset = () => {
    this.setState({ habits: [] })
  }

  render() {
    const { habits, total, text } = this.state
    const { handleSubmit, handleInput, handleReset } = this
    return (
      <React.Fragment>
        <NavBar total={total} />
        <SubmitForm handleSubmit={handleSubmit} value={text} handleInput={handleInput} />
        <Habits habits={habits} />
        <ResetBtn handleReset={handleReset} />
      </React.Fragment>
    )
  }
}

export default App
