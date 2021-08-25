import { ADD_MOVIES, SET_FILTER } from "../actions/index.js";

const reducer = (state, action) => {
  let { calories, lessCalories } = state;
  switch (action.type) {
    case ADD_MOVIES:
      return state;
    case SET_FILTER:
      return state;
    default:
      return state;
  }
};

export default reducer;
