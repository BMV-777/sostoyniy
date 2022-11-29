// import Counter from './Counter';
// import Dropdown from './Dropdown';
import React, { Component } from 'react';
// import ColorPicker from './ColorPicker';
import TodoList from './TuduList/TodoList';
import inisdodo from './todos.json';
// import './App.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: inisdodo,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodo = todos.length;
    const completTodo = todos.reduce(
      (acc, todo) => (todo.completed ? (acc = 1) : acc),
      0
    );

    return (
      <>
        <h1>Состояние компонента </h1>

        <div>
          <p>Общее колич-во: {totalTodo}</p>
          <p>Количество выполненных:{completTodo} </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <ColorPicker options={colorPickerOptions} />
        <Counter initValue={7} />
        <Dropdown /> */}
      </>
    );
  }
}

export default App;
