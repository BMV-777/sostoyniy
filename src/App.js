import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import Counter from './Counter';
// import Dropdown from './Dropdown';
// import Filter from './Filter/Filter';
// import TodoEdition from './TodoEditor/TodoEditor';
// import ColorPicker from './ColorPicker';
// import TodoList from './TuduList/TodoList';
// import initialTodos from './todos.json';
import Modal from './Modal/Modal';
import './App.css';

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
    // todos: initialTodos,
    // filter: '',
    showModal: false,
  };

  componentDidMount = () => {
    // console.log('App copmponentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилося поля todos');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log('todoId');

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Нашли тот туду который нужно!');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  addTodo = text => {
    const todo = {
      id: nanoid(4),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  changFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodo = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calcTodo = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  togglModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    // console.log('App render');
    const { showModal } = this.state;
    // const { todos, filter } = this.state;
    // const totalTodo = todos.length;
    // const completTodo = this.calcTodo();
    // const visibleTodos = this.getVisibleTodo();

    return (
      <div>
        <button type="button" onClick={this.togglModal}>
          Открыть Модалку Желаний
        </button>
        {showModal && (
          <Modal onClose={this.togglModal}>
            <h1>Меры придосторожности к успеху!!!</h1>
            <ul>
              <li>Трахатся много всех кто нравится!!</li>
              <li>Пойти на работу и стать успешным программистом!!!</li>
              <li>Добится в IT Высокой зарплаты и статуса!!!</li>
              <li>И зделать это очень быстро!!!</li>
            </ul>
            <button type="button" onClick={this.togglModal}>
              Закрыть Модалку Желаний
            </button>
          </Modal>
        )}
        {/* <h1>Состояние компонента </h1>
        <div>
          <p>Общее колич-во: {totalTodo}</p>
          <p>Количество выполненных:{completTodo} </p>
        </div>
        <TodoEdition onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changFilter} /> */}
        {/* <label>
          Фильтер по имени
          <input type="text" value={filter} onChange={this.changFilter} />
        </label> */}
        {/* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter initValue={7} /> */}
        {/* <Dropdown /> */}
      </div>
    );
  }
}

export default App;
