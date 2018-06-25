import { SIGNED_IN } from '../constants';
import { SET_GOALS } from '../constants';
import { SET_COMPLETED } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  };
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }

  return action;
}

export function setCompleted(completedGoals) {
  const action = {
    type: SET_COMPLETED,
    completedGoals
  }

  return action;
}
