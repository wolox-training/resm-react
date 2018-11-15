import { combineReducers, createStore } from 'redux';

import gameReducer from './game/reducer';

const rootReducer = combineReducers({
  game: gameReducer
});

const store = createStore(rootReducer);

export default store;
