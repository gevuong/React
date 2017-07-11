import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // Phase 1: Logging
  // store.dispatch = addLoggingToDispatch(store);

  // Phase 2: Refactoring (without using Redux applyMiddleware)
  //We need to pass in the store and each middleware that we want to apply. In this case, addLoggingToDispatch is the only middleware.
  store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// Phase 1: Logging
// const addLoggingToDispatch = store => {
//   const x = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     x(action);
//     console.log(store.getState());
//   };
// };

// Phase 2: Refactoring (without using Redux applyMiddleware)
// function addLoggingToDispatch(store) {
//   return function (nextMiddleware) {
//     return function (action) {
//       console.log('action received: ', store.getState());
//       console.log('state pre-dispatch: ', action);
//
//       let res = nextMiddleware(action);
//       console.log('state post-dispatch: ', store.getState());
//
//       return res;
//     };
//   };
// }

// OR ES6 way:
const addLoggingToDispatch = store => nextMiddleware => action => {
  console.log('action received: ', action);
  console.log('state pre-dispatch: ', store.getState());

  // let res = nextMiddleware(action);
  console.log('state post-dispatch: ', store.getState());

  // return res;
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store, dispatch);
  });
  return Object.assign({}, store, {dispatch});
};

// let store = configureStore();
// window.store = store;
// store.dispatch = addLoggingToDispatch(store);
