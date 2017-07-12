import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

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
  let store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});

export default Todo;
