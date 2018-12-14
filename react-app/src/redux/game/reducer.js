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
        ...action.payload
      }),
    [actionNames.TOGGLE_MARK]: (state, action) =>
      state.merge({
        ...action.payload
      }),
    [actionNames.UPDATE_STATUS]: (state, action) =>
      state.merge({
        status: action.payload
      })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
