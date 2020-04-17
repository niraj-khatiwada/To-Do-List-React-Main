import React, { Component } from 'react'
import './todoList.css'
import ToDo from './todo'
import ToDoForm from './todoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [],
    }
  }

  addToList(inputValueObject) {
    console.log(inputValueObject)
    this.setState({
      todoItems: [...this.state.todoItems, inputValueObject],
    })
  }

  handleDelete(id) {
    this.setState((preState) => {
      return {
        todoItems: preState.todoItems.filter((item) => {
          return item.id !== id
        }),
      }
    })
  }
  handleEdit(actualText, editedText) {
    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        if (item.task === actualText) {
          item.task = editedText
        }
        return item
      }),
    })
    console.log(this.state.todoItems)
  }

  render() {
    const items = this.state.todoItems.map((todo) => {
      return (
        <ToDo
          text={todo.task}
          key={todo.id}
          handleEdit={this.handleEdit.bind(this, todo.task)}
          handleDelete={this.handleDelete.bind(this, todo.id)}
        />
      )
    })
    return (
      <div className="ToDoList">
        <h1>To-Do List</h1>
        <div className="ToDoList-grid">
          {items}
          <ToDoForm handleFormSubmit={this.addToList.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ToDoList
