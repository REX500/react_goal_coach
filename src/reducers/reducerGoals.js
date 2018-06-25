import { SET_GOALS } from '../constants';

// they are an empty array because the thing we store in them is an array of goals

export default (state = [], action) => {
  switch (action.type) {
    case SET_GOALS:
      const {goals} = action;
      return goals;
    default:
      return state;
  }
}
