import { actionNames } from './actions';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  status: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.jumpTo:
      return {
        ...state,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext
      };
    case actionNames.toggleMark:
      return {
        ...state,
        history: action.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext
      };
    case actionNames.updateStatus:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export default reducer;
