import { authService } from '../../services/authService';
import { USER_PLAYER_MARK, SQUARES_NUMBER } from '../../app/constants';

export const actionNames = {
  JUMP_TO: 'JUMP_TO',
  TOGGLE_MARK: 'TOGGLE_ARK',
  UPDATE_STATUS: 'UPDATE_STATUS',
  LOADING: 'LOADING',
  UPDATE_GAME_SUCCESS: 'UPDATE_GAME_SUCCESS',
  UPDATE_GAME_FAILURE: 'UPDATE_GAME_FAILURE',
  GET_USER_POINT_SUCCESS: 'GET_USER_POINT_SUCCESS',
  GET_USER_POINT_FAILURE: 'GET_USER_POINT_FAILURE'
};

export const jumpTo = (stepNumber, xIsNext, winner) => ({
  type: actionNames.JUMP_TO,
  payload: {
    stepNumber,
    xIsNext,
    winner
  }
});

export const toggleMark = obj => ({
  type: actionNames.TOGGLE_MARK,
  payload: obj
});

export const updateStatus = status => ({
  type: actionNames.UPDATE_STATUS,
  payload: status
});

const loading = () => ({
  type: actionNames.LOADING
});

const updateGameActions = {
  updateGameSuccess: (data, obj) => {
    const id = data.id;
    const gameCount = Number(data.gameCount) + 1;
    const payload = { gameCount };
    if (obj.winner && obj.winner === USER_PLAYER_MARK) {
      payload.points = Number(data.points) + obj.points;
      payload.historyPoints = { ...data.historyPoints, [new Date().getTime()]: obj.points };
    }
    authService.setUser(id, payload);
    return {
      type: actionNames.UPDATE_GAME_SUCCESS,
      loading: false,
      payload
    };
  },
  updateGameFailure: message => ({
    type: actionNames.UPDATE_GAME_FAILURE,
    loading: false,
    payload: message
  })
};

const getUserPointsActions = {
  getUserPointsSuccess: data => ({
    type: actionNames.GET_USER_POINT_SUCCESS,
    loading: false,
    payload: {
      gameCount: Number(data.gameCount),
      points: Number(data.points),
      historyPoints: data.historyPoints
    }
  }),
  getUserPointsFailure: message => ({
    type: actionNames.GET_USER_POINT_FAILURE,
    loading: false,
    payload: message
  })
};

export const updateGame = obj => async dispatch => {
  dispatch(loading());
  dispatch(toggleMark(obj));
  if (obj.winner || obj.stepNumber === SQUARES_NUMBER) {
    const response = await authService.getUser({ token: obj.token });
    if (response && response.ok && response.data.length > 0) {
      dispatch(updateGameActions.updateGameSuccess(response.data[0], obj));
    } else {
      dispatch(updateGameActions.updateGameFailure('Problem get points.'));
    }
  }
};

export const getUserPoints = obj => async dispatch => {
  dispatch(loading());
  const response = await authService.getUser({ token: obj.token });
  if (response && response.ok && response.data.length > 0) {
    dispatch(getUserPointsActions.getUserPointsSuccess(response.data[0]));
  } else {
    dispatch(getUserPointsActions.getUserPointsFailure('Problem get points.'));
  }
};

export const actionCreators = { jumpTo, toggleMark, updateStatus };

export default actionCreators;
