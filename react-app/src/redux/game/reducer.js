import { createReducer, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionNames } from './actions';

const initialState = Immutable({
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  status: '',
  winner: null,
  message: '',
  gamePoints: null,
  gamePointsLoading: false,
  gamePointsError: null
});

const reducerDescription = {
  primaryActions: [actionNames.UPDATE_GAME, actionNames.GET_USER_POINT],
  override: {
    [actionNames.JUMP_TO]: (state, action) =>
      state.merge({
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      }),
    [actionNames.TOGGLE_MARK]: (state, action) =>
      state.merge({
        history: action.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      }),
    [actionNames.UPDATE_STATUS]: (state, action) =>
      state.merge({
        status: action.status
      })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
