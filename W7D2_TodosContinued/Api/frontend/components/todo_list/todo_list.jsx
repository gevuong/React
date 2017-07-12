import React from 'react';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) { // { todos, receiveTodo, removeTodo }
    super(props);
    this.state = {todos: props.todos, todo: {}};
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, idx) =>
            <li key={idx}>
              {todo.title}
              <button onClick={() => this.props.removeTodo(todo)}>Delete Todo</button>
            </li>
          )}
          <TodoForm receiveTodo={this.props.receiveTodo} />
        </ul>
      </div>
    );
  }
}

export default TodoList;
