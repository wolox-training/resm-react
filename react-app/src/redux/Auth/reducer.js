import Immutable from 'seamless-immutable';

import { actionNames } from './actions';

const initialState = Immutable({
  loading: false,
  logged: false
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
        logged: true
      });
    case actionNames.GET_USER_FAILURE:
      return state.merge({
        loading: false,
        logged: false
      });
    default:
      return state;
  }
};

export default reducer;
