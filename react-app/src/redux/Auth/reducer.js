import Immutable from 'seamless-immutable';

import { loadState } from '../localStorage';

import { actionNames } from './actions';

const token = loadState('token', '');
const tokenExpireDateTime = loadState('tokenExpireDateTime', '');
const logged = token && !!(new Date().getTime() <= tokenExpireDateTime);

const initialState = Immutable({
  loading: false,
  logged,
  token,
  tokenExpireDateTime,
  messageLogin: '',
  user: {
    id: null,
    name: '',
    username: '',
    email: ''
  }
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
        user: {
          id: action.id,
          name: action.name,
          username: action.username,
          email: action.email
        }
      });
    case actionNames.GET_USER_FAILURE:
      return state.merge({
        loading: false,
        logged: false,
        token: '',
        tokenExpireDateTime: '',
        messageLogin: action.messageLogin,
        user: {
          id: null,
          name: '',
          username: '',
          email: ''
        }
      });
    default:
      return state;
  }
};

export default reducer;
