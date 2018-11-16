import { combineReducers, createStore } from 'redux';

import gameReducer from './Game/reducer';

const rootReducer = combineReducers({
  game: gameReducer
});

const store = createStore(rootReducer);

export default store;
