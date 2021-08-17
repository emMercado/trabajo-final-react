import { combineReducers } from 'redux';
import { getPointsAllPoints } from './pointsReducer'

const rootReducer = combineReducers({
  point: getPointsAllPoints
});

export default rootReducer;
