import { increment, decrement, reset } from "./actions.js";

// Creating a factory function that creates
const actionFactory = {
  createIncrementAction: (value) => increment(value),
  createDecrementAction: (value) => decrement(value),
  createResetAction: (value) => reset(value),
};

export default actionFactory;
