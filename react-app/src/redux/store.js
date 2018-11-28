import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

import { saveState } from './localStorage';
import authReducer from './Auth/reducer';
import gameReducer from './Game/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
  form
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  applyMiddleware(thunk)
);

const saveToLocalStorage = () => {
  saveState('auth', store.getState().auth);
};

store.subscribe(saveToLocalStorage);

export default store;
