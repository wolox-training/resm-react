import Immutable from 'seamless-immutable';

import { actionNames } from './actions';

const initialState = Immutable({
  loading: false,
  logged: false,
  messageLogin: '',
  user: {
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
        user: {
          name: action.name,
          username: action.username,
          email: action.email
        }
      });
    case actionNames.GET_USER_FAILURE:
      return state.merge({
        loading: false,
        logged: false,
        user: {
          name: '',
          username: '',
          email: ''
        },
        messageLogin: action.messageLogin
      });
    case actionNames.LOGOUT:
      return state.merge({
        loading: false,
        logged: false,
        user: {
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
