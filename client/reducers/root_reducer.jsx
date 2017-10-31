import { combineReducers } from 'redux';
import pollsReducer from './polls_reducer';

const rootReducer = combineReducers({
  pollsReducer,
});

export default rootReducer;
