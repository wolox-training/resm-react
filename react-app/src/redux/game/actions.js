import { createTypes, completeTypes, withPrefetch, withSuccess } from 'redux-recompose';

import { authService } from '../../services/authService';
import { USER_PLAYER_MARK } from '../../app/constants';

export const actionNames = createTypes(
  completeTypes(['UPDATE_GAME', 'GET_USER_POINT'], ['JUMP_TO', 'TOGGLE_MARK', 'UPDATE_STATUS', 'LOADING']),
  '@@AUTH'
);

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

export const getUserPoints = obj => ({
  type: actionNames.GET_USER_POINT,
  service: authService.getUser,
  target: 'gamePoints',
  payload: obj.token,
  successSelector: response => (response.data[0] ? response.data[0].gamePoints : null)
});

export const updateGame = obj => ({
  type: actionNames.UPDATE_GAME,
  service: authService.getUser,
  target: 'gamePoints',
  payload: obj.token,
  injections: [
    withPrefetch(dispatch => {
      dispatch(toggleMark(obj.history, obj.stepNumber, obj.xIsNext, obj.winner));
    }),
    withSuccess((dispatch, response) => {
      if (obj.winner || obj.stepNumber === 9) {
        const data = response.data[0];
        const id = data.id;
        const oldGamePoints = data.gamePoints;
        const count = Number(oldGamePoints.count) + 1;
        let gamePoints = { count };
        if (obj.winner && obj.winner === USER_PLAYER_MARK) {
          const points = Number(oldGamePoints.points) + obj.points;
          const history = { ...oldGamePoints.history, [new Date().getTime()]: obj.points };
          gamePoints = { ...gamePoints, points, history };
        }
        authService.setUser(id, { gamePoints });
        dispatch({
          type: actionNames.UPDATE_GAME_SUCCESS,
          target: 'gamePoints',
          payload: gamePoints
        });
      }
    })
  ],
  successSelector: response => (response.data[0] ? response.data[0].gamePoints : null)
});

export const actionCreators = { jumpTo, toggleMark, updateStatus, getUserPoints, updateGame };

export default actionCreators;
