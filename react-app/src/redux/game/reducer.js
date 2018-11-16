import Immutable from 'seamless-immutable';

import { actionNames } from './actions';

const initialState = Immutable({
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  status: '',
  winner: null
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.jumpTo:
      return state.merge({
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      });
    case actionNames.toggleMark:
      return state.merge({
        history: action.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
        winner: action.winner
      });
    case actionNames.updateStatus:
      return state.merge({ status: action.status });
    default:
      return state;
  }
};

export default reducer;
