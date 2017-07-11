import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers ({
  todos: todosReducer // todos is one slice of state
  // notes is a key it points to a notesReducer;
}); // rootReducers is the whole state.

export default rootReducer;
