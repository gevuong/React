import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store.js';
import {allTodos} from '../reducers/selectors.js';

let store = configureStore();
window.store = store;

window.allTodos = allTodos(store.getState());


class Todo extends React.Component {
  render() {
    return (

      <div>
        <h1>Todo App</h1>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Todo/>, document.getElementById('main'));
});

export default Todo;
