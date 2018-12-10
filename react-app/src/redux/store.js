import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
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

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
];

const store = createStore(rootReducer, compose(...enhancers));

const saveToLocalStorage = () => {
  saveState('token', store.getState().auth.token);
  saveState('tokenExpireDateTime', store.getState().auth.tokenExpireDateTime);
};

store.subscribe(saveToLocalStorage);

export default store;
