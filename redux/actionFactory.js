//actionfactory.js

import { increment, decrement, reset } from "./actions.js";

const actionFactory = {
  createIncrementAction: (value) => increment(value),
  createDecrementAction: (value) => decrement(value),
  createResetAction: (value) => reset(value),
};

export default actionFactory;
