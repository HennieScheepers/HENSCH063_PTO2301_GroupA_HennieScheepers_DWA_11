// Creates an function that returns an object that additional functionality
export function createStore(reducer) {
  let state;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }
  // Setting up our initial state
  dispatch({});
  return { getState, dispatch, subscribe };
}
