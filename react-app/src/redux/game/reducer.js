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
      return state.merge({
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      });
    case actionNames.TOGGLE_MARK:
      return state.merge({
        history: action.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      });
    case actionNames.UPDATE_STATUS:
      return state.merge({ status: action.status });
    case actionNames.LOADING:
      return state.merge({ loading: true });
    case actionNames.UPDATE_GAME_SUCCESS:
      return state.merge({
        loading: false,
        message: '',
        gameCount: action.gameCount,
        points: action.points,
        historyPoints: action.historyPoints
      });
    case actionNames.UPDATE_GAME_FAILURE:
      return state.merge({
        loading: false,
        message: action.message
      });
    case actionNames.GET_USER_POINT_SUCCESS:
      return state.merge({
        loading: false,
        message: '',
        gameCount: action.gameCount,
        points: action.points,
        historyPoints: action.historyPoints
      });
    case actionNames.GET_USER_POINT_FAILURE:
      return state.merge({
        loading: false,
        message: action.message
      });
    default:
      return state;
  }
};

export default reducer;
