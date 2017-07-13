// QUESTION: what's passing dispatch and getState to the
// our thunk middleware?

const thunk = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch);
      }
      return next(action);
    };
  };
};

export default thunk;
