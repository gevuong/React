import React from 'react';

const TodoList = ({todos, receiveTodo}) => (
  <div>
    <ul>
      {todos.map((todo, idx) =>
        <li key={idx}>
          {todo.title}
        </li>
      )}
    </ul>
  </div>
);

export default TodoList;
