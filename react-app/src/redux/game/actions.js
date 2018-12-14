import { createTypes, completeTypes, withPrefetch, withSuccess } from 'redux-recompose';

import { authService } from '../../services/authService';
import { USER_PLAYER_MARK, OPONENT_PLAYER_MARK, SQUARES_NUMBER } from '../../app/constants';

export const actionNames = createTypes(
  completeTypes(['UPDATE_GAME', 'GET_USER_POINT'], ['JUMP_TO', 'TOGGLE_MARK', 'UPDATE_STATUS', 'LOADING']),
  '@@AUTH'
);

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
      let status = `Next player: ${obj.xIsNext ? USER_PLAYER_MARK : OPONENT_PLAYER_MARK}`;
      if (obj.winner) {
        status = `Winner: ${obj.winner}`;
      }
      dispatch(updateStatus(status));
      dispatch(
        toggleMark({
          history: obj.history,
          stepNumber: obj.stepNumber,
          xIsNext: obj.xIsNext,
          winner: obj.winner
        })
      );
    }),
    withSuccess((dispatch, response) => {
      if (obj.winner || obj.stepNumber === SQUARES_NUMBER) {
        const data = response.data[0];
        const id = data.id;
        const oldGamePoints = data.gamePoints;
        const count = Number(oldGamePoints.count) + 1;
        const gamePoints = { count };
        if (obj.winner && obj.winner === USER_PLAYER_MARK) {
          gamePoints.points = Number(oldGamePoints.points) + obj.points;
          gamePoints.history = { ...oldGamePoints.history, [new Date().getTime()]: obj.points };
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
