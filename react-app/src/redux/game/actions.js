export const actionNames = {
  jumpTo: 'JUMP-TO',
  toggleMark: 'TOGGLE-MARK',
  updateStatus: 'UPDATE-STATUS'
};

export const jumpTo = (stepNumber, xIsNext, winner) => ({
  type: actionNames.jumpTo,
  stepNumber,
  xIsNext,
  winner
});

export const toggleMark = (history, stepNumber, xIsNext, winner) => ({
  type: actionNames.toggleMark,
  history,
  stepNumber,
  xIsNext,
  winner
});

export const updateStatus = status => ({
  type: actionNames.updateStatus,
  status
});

export const actionCreators = { jumpTo, toggleMark, updateStatus };

export default actionCreators;
