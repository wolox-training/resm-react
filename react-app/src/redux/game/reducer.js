import Immutable from 'seamless-immutable';

import { actionNames } from './actions';

const initialState = Immutable({
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  status: '',
  winner: null,
  loading: false,
  message: '',
  gameCount: 0,
  points: 0,
  historyPoints: null
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.JUMP_TO:
      return state.merge({ ...action.payload });
    case actionNames.TOGGLE_MARK:
      return state.merge({ ...action.payload });
    case actionNames.UPDATE_STATUS:
      return state.merge({ status: action.payload });
    case actionNames.LOADING:
      return state.merge({ loading: true });
    case actionNames.UPDATE_GAME_SUCCESS:
      return state.merge({
        loading: false,
        message: '',
        ...action.payload
      });
    case actionNames.UPDATE_GAME_FAILURE:
      return state.merge({
        loading: false,
        message: action.payload
      });
    case actionNames.GET_USER_POINT_SUCCESS:
      return state.merge({
        loading: false,
        message: '',
        ...action.payload
      });
    case actionNames.GET_USER_POINT_FAILURE:
      return state.merge({
        loading: false,
        message: action.payload
      });
    default:
      return state;
  }
};

export default reducer;
