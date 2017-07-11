import React from 'react';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => (
  <div>
    <ul>
      {todos.map((todo, idx) =>
        <li key={idx}>
          {todo.title}
        </li>
      )}
      <TodoForm receiveTodo={receiveTodo} />
    </ul>
  </div>
);

export default TodoList;
