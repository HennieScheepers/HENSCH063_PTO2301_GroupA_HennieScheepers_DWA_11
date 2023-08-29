//store.js

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

  dispatch({}); // Initial state setup
  return { getState, dispatch, subscribe };
}
