import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import gameReducer from './Game/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  form
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;
