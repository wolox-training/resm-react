import { withPostFailure, withSuccess } from 'redux-recompose';

import { authService } from '../../services/authService';
import { removeState } from '../localStorage';
import { TOKEN_EXPIRATION_MILISECONDS } from '../../app/constants';

import { actionNames } from './actionTypes';

const setToken = (token, tokenExpireDateTime) => ({
  type: actionNames.SET_TOKEN,
  payload: { token, tokenExpireDateTime }
});

const getUserSuccess = obj => ({
  type: actionNames.GET_USER_SUCCESS,
  target: 'user',
  payload: obj
});

const getUserFailure = message => ({
  type: actionNames.GET_USER_FAILURE,
  target: 'user',
  payload: message
});

export const getUser = obj => ({
  type: actionNames.GET_USER,
  service: authService.getUser,
  target: 'user',
  payload: obj,
  injections: [
    withSuccess((dispatch, response) => {
      if (response.data && response.data.length) {
        const data = response.data[0];
        const token = data.token;
        const tokenExpireDateTime = new Date().getTime() + TOKEN_EXPIRATION_MILISECONDS;
        const email = data.email;
        const user = data.user && data.user;
        let success = false;
        if (obj.token || (obj.email && obj.pass) || obj.id) {
          success = true;
        }
        if (obj.token) {
          authService.setTokenInHeader(token);
        }
        if (obj.email && obj.pass) {
          dispatch(setToken(token, tokenExpireDateTime));
          authService.setUser(data.id, { tokenIsValid: true, tokenExpireDateTime });
        }
        if (success) {
          dispatch(getUserSuccess({ email, ...user }));
        }
      } else {
        dispatch(getUserFailure('Invalid access data.'));
      }
    }),
    withPostFailure(dispatch => {
      dispatch(getUserFailure('Problem when obtaining user data.'));
    })
  ],
  successSelector: response => response.data[0].user
});

export const logout = () => async dispatch => {
  removeState('token');
  removeState('tokenExpireDateTime');
  dispatch({ type: actionNames.LOGOUT });
};

export const actionCreators = { actionNames, getUser, logout };

export default actionCreators;
