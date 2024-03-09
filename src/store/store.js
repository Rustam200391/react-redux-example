// file Global store
import { createStore } from "redux";
// Код файла store.js

const store = createStore(reducer);

// starting mean
const initialState = { value: 0 };

const ACTION_1 = "ACTION_1";
const ACTION_2 = "ACTION_2";

// function for rander state
const reducer = (state = initialState, action) => {
  // function accept state value & object event(action)
  // object event(action) contains two parametrs: action.type and action.value
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        value: action.value_1,
      };
    case ACTION_2:
      return {
        ...state,
        value: action.value_1,
      };
    default:
      return state;
  }
};

export default store;
