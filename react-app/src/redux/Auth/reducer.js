import Immutable from 'seamless-immutable';

import { loadState } from '../localStorage';

import { actionNames } from './actions';

const defaultUser = {
  id: null,
  email: '',
  username: '',
  name: '',
  avatar: ''
};

const defaultInitialState = Immutable({
  loading: false,
  logged: false,
  messageLogin: '',
  user: defaultUser
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
        messageLogin: '',
        user: action.user
      });
    case actionNames.GET_USER_FAILURE:
      return state.merge({
        loading: false,
        logged: false,
        messageLogin: action.messageLogin,
        user: defaultUser
      });
    case actionNames.LOGOUT:
      return state.merge({
        loading: false,
        logged: false,
        messageLogin: '',
        user: defaultUser
      });
    default:
      return state;
  }
};

export default reducer;
