import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      'Aerate burlap sacks',
      'Bathe the horses',
      "Brush cousin's teeth",
      'Sharpen masonry bits',
      'Eat leftover salmon',
    ],
    writing: false,
    newTodo: '',
  };

  onChange = ev => {
    this.setState({ newTodo: ev.target.value });
  };

  submitTodo = ev => {
    ev.preventDefault();
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodo);
    this.setState({
      todos: newTodos,
      newTodo: '',
    });
  };

  deleteTodo = idx => {
    const newTodos = this.state.todos;
    newTodos.splice(idx, 1);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <form onSubmit={this.submitTodo}>
            <input
              className="new-todo-input"
              type="text"
              placeholder="What do you need to do?"
              value={this.state.newTodo}
              onChange={this.onChange}
            />
            <button
              type="submit"
              onClick={this.submitTodo}
              className="new-todo-submit"
            >
              Yeah!
            </button>
          </form>
        </div>
        <div className="divider" />
        <div className="todo-list">
          {this.state.todos.map((todo, idx) =>
            todoRow(todo, idx, e => this.deleteTodo(idx))
          )}
        </div>
      </div>
    );
  }
}

const todoRow = (text, idx, deleteFunction) => (
  <div key={idx} className="todo">
    <div className="todo-text">{text}</div>
    <div onClick={deleteFunction} className="todo-delete">
      X
    </div>
  </div>
);

export default App;
