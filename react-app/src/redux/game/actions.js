export const actionNames = {
  JUMP_TO: 'JUMP_TO',
  TOGGLE_MARK: 'TOGGLE_ARK',
  UPDATE_STATUS: 'UPDATE_STATUS'
};

export const jumpTo = (stepNumber, xIsNext, winner) => ({
  type: actionNames.JUMP_TO,
  stepNumber,
  xIsNext,
  winner
});

export const toggleMark = (history, stepNumber, xIsNext, winner) => ({
  type: actionNames.TOGGLE_MARK,
  history,
  stepNumber,
  xIsNext,
  winner
});

export const updateStatus = status => ({
  type: actionNames.UPDATE_STATUS,
  status
});

export const actionCreators = { jumpTo, toggleMark, updateStatus };

export default actionCreators;
