import Immutable from 'seamless-immutable';

import { loadState } from '../localStorage';

// TODO: why not working with './actions'
import { actionNames } from './actionTypes';

const defaultUser = {
  id: null,
  email: '',
  username: '',
  name: '',
  avatar: ''
};

const token = loadState('token', '');
const tokenExpireDateTime = loadState('tokenExpireDateTime', null);
const logged = token && !!(new Date().getTime() <= tokenExpireDateTime);

const initialState = Immutable({
  loading: false,
  logged,
  token,
  tokenExpireDateTime,
  messageLogin: '',
  user: defaultUser
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_USER:
      return state.merge({
        loading: true
      });
    case actionNames.GET_USER_SUCCESS:
      return state.merge({
        loading: false,
        logged: true,
        token: action.token,
        tokenExpireDateTime: action.tokenExpireDateTime,
        messageLogin: '',
        user: action.user
      });
    case actionNames.GET_USER_FAILURE:
      return state.merge({
        loading: false,
        logged: false,
        token: '',
        tokenExpireDateTime: null,
        messageLogin: action.messageLogin,
        user: defaultUser
      });
    case actionNames.LOGOUT:
      return state.merge({
        loading: false,
        logged: false,
        token: '',
        tokenExpireDateTime: null,
        messageLogin: '',
        user: defaultUser
      });
    default:
      return state;
  }
};

export default reducer;
