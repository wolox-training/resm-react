import { combineReducers as CR, createStore, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState, wrapCombineReducers } from 'redux-recompose';

import { saveState } from './localStorage';
import authReducer from './Auth/reducer';
import gameReducer from './Game/reducer';

configureMergeState((state, diff) => state.merge(diff));

const combineReducers = wrapCombineReducers(CR);

const rootReducer = combineReducers({
  game: gameReducer,
  auth: authReducer,
  form
});

const middlewares = [thunk, fetchMiddleware];
const enhancers = [
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
];

const store = createStore(rootReducer, compose(...enhancers));

const saveToLocalStorage = () => {
  const auth = store.getState().auth;
  saveState('token', auth.token);
  saveState('tokenExpireDateTime', auth.tokenExpireDateTime);
};

store.subscribe(saveToLocalStorage);

export default store;
