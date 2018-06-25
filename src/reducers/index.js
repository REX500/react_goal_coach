import { combineReducers } from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';
import completedGoals from './reducerCompletedGoals';

export default combineReducers({
  user,
  goals,
  completedGoals
});
