//script.js

import { createStore } from "./redux/store.js";
import { countReducer } from "./redux/reducers.js";
import actionFactory from "./redux/actionFactory.js";
/**
 * @type {HTMLElement}
 */
export const valueEl = document.querySelector("[data-value]");
const store = createStore(countReducer);
/**
 * @type {HTMLElement}
 */
export const outputEl = document.querySelector("[data-output]");
/**
 * @type {HTMLElement}
 */
const incButton = document.querySelector("[data-inc-button]");
/**
 * @type {HTMLElement}
 */
const decButton = document.querySelector("[data-dec-button]");
/**
 * @type {HTMLElement}
 */
const resetButton = document.querySelector("[data-reset]");

function updateCountDisplay() {
  const state = store.getState();
  outputEl.textContent = state.count;
}

store.subscribe(updateCountDisplay);

incButton.addEventListener("click", () =>
  store.dispatch(actionFactory.createIncrementAction(valueEl.value))
);

decButton.addEventListener("click", () =>
  store.dispatch(actionFactory.createDecrementAction(valueEl.value))
);

function reset() {
  store.dispatch(actionFactory.createResetAction());
}

resetButton.addEventListener("click", reset);

updateCountDisplay();
