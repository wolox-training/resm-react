import { createReducer, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { loadState } from '../localStorage';

// TODO: why not working with './actions'
import { actionNames } from './types';

const defaultUser = {
  email: '',
  username: '',
  name: '',
  avatar: ''
};

const token = loadState('token', '');
const tokenExpireDateTime = loadState('tokenExpireDateTime', null);
const logged = token && !!(new Date().getTime() <= tokenExpireDateTime);

const initialState = Immutable({
  logged,
  token,
  tokenExpireDateTime,
  user: defaultUser,
  userLoading: false,
  userError: null
});

const reducerDescription = {
  primaryActions: [actionNames.GET_USER],
  override: {
    [actionNames.SET_TOKEN]: (state, action) =>
      state.merge({
        logged: true,
        token: action.payload.token,
        tokenExpireDateTime: action.payload.tokenExpireDateTime
      }),
    [actionNames.LOGOUT]: state =>
      state.merge({
        logged: false,
        token: '',
        tokenExpireDateTime: null,
        user: defaultUser
      })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
