// Declaring types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Creating objects for each type, that hold the type and a value
const increment = (value) => ({
  type: INCREMENT,
  value: value,
});

const decrement = (value) => ({
  type: DECREMENT,
  value: value,
});

const reset = (value) => ({
  type: RESET,
  value: value,
});

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset };
