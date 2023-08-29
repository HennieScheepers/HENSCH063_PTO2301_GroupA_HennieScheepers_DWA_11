import { INCREMENT, DECREMENT, RESET } from "./actions.js";

const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + parseInt(action.value) };
    case DECREMENT:
      return { ...state, count: state.count - parseInt(action.value) };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
