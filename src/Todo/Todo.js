import React from 'react';
import '../TuduList/TodoList.css';

const Todo = ({ completed, text, onToggleCompleted, onDeleteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TodoList_checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
      Удалить
    </button>
  </>
);

export default Todo;
