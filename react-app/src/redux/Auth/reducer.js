import Immutable from 'seamless-immutable';

import { loadState } from '../localStorage';

import { actionNames } from './actions';

const defaultInitialState = Immutable({
  loading: false,
  logged: false,
  token: '',
  messageLogin: '',
  user: {
    id: null,
    name: '',
    username: '',
    email: ''
  }
});

const initialState = loadState('auth', defaultInitialState);

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
        user: {
          id: null,
          name: '',
          username: '',
          email: ''
        },
        messageLogin: action.messageLogin
      });
    default:
      return state;
  }
};

export default reducer;
