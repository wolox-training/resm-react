import { authService } from '../../services/authService';
import { USER_PLAYER_MARK } from '../../app/constants';

export const actionNames = {
  JUMP_TO: 'JUMP_TO',
  TOGGLE_MARK: 'TOGGLE_ARK',
  UPDATE_STATUS: 'UPDATE_STATUS',
  UPDATE_POINTS: 'UPDATE_POINTS'
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

const updateGameActions = {
  updateGameSuccess: (data, obj, dispatch) => {
    const id = data.id;
    const gameCount = Number(data.gameCount) + 1;
    let objUpdate = { gameCount };
    if (obj.winner && obj.winner === USER_PLAYER_MARK) {
      const points = Number(data.points) + obj.points;
      const historyPoints = { ...data.historyPoints, [new Date().getTime()]: obj.points };
      objUpdate = { ...objUpdate, points, historyPoints };
    }
    authService.setUser(id, objUpdate);
    dispatch({
      type: actionNames.UPDATE_POINTS,
      ...objUpdate
    });
  },
  updateGameFailure: (message, dispatch) => {
    dispatch({
      type: actionNames.GET_USER_FAILURE,
      messageLogin: message
    });
  }
};

export const updateGame = obj => async dispatch => {
  dispatch(toggleMark(obj.history, obj.stepNumber, obj.xIsNext, obj.winner));
  if (obj.winner || obj.stepNumber === 9) {
    const response = await authService.getUser({ token: obj.token });
    if (response && response.ok && response.data.length > 0) {
      updateGameActions.updateGameSuccess(response.data[0], obj, dispatch);
      // const data = response.data[0];
      // const id = data.id;
      // const gameCount = Number(data.gameCount) + 1;
      // let objUpdate = { gameCount };
      // if (obj.winner && obj.winner === USER_PLAYER_MARK) {
      //   const points = Number(data.points) + obj.points;
      //   const historyPoints = { ...data.historyPoints, [new Date().getTime()]: obj.points };
      //   objUpdate = { ...objUpdate, points, historyPoints };
      // }
      // authService.setUser(id, objUpdate);
    } else {
      updateGameActions.updateGameFailure('Problem get data.', dispatch);
    }
  }
};

export const actionCreators = { jumpTo, toggleMark, updateStatus };

export default actionCreators;
