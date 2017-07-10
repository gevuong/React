import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
    let newState = merge({}, state);
    action.todos.forEach(function(el) {
      newState = {action: el};
    })

      // iterating through action.todos setting a key value pair for each one in the new state.
      // return the new state
    case RECEIVE_TODO:
    // Make a new object setting a single key value pair for action.todo
// Return a new state object by merging your previous state and your new object
    default:
      return state;
  }
};

export default todosReducer;
