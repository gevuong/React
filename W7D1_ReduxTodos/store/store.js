import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';


// will come in handy when we begin working with preloadedState and middlewares, or if you want to use hot-module replacement or other snazzy add-ons.
function configureStore() {
  return createStore(rootReducer);
}

export default configureStore;
