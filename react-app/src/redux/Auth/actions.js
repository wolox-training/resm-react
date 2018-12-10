import { authService } from '../../services/authService';
import { removeState } from '../localStorage';
import { TOKEN_EXPIRATION_MILISECONDS } from '../../app/constants';

import { actionNames } from './actionTypes';

const getUserActions = {
  getUserSuccess: (data, token, dispatch) => {
    const tokenExpireDateTime = new Date().getTime() + TOKEN_EXPIRATION_MILISECONDS;
    const user = {
      id: data.id,
      email: data.email,
      username: data.username,
      name: data.name,
      avatar: data.avatar
    };
    dispatch({
      type: actionNames.GET_USER_SUCCESS,
      token: data.token,
      tokenExpireDateTime,
      user
    });
    if (!token) {
      authService.setTokenInHeader(data.token);
      authService.setUser(data.id, {
        tokenIsValid: true,
        tokenExpireDateTime
      });
    }
  },
  getUserFailure: (message, dispatch) => {
    dispatch({
      type: actionNames.GET_USER_FAILURE,
      messageLogin: message
    });
  }
};

export const getUser = obj => async dispatch => {
  dispatch({ type: actionNames.GET_USER });
  let message;
  let response;
  if (obj.token) {
    response = await authService.getUser({ token: obj.token });
  } else if (obj.email && obj.pass) {
    response = await authService.getUser({ email: obj.email, pass: obj.pass });
  } else if (obj.id) {
    response = await authService.getUser({ id: obj.id });
  } else {
    message = 'Problem to query user info.';
  }
  if (response && response.ok) {
    if (response.data.length > 0) {
      const data = response.data[0];
      if ((obj.email && obj.pass) || (obj.token && new Date().getTime() <= data.tokenExpireDateTime)) {
        getUserActions.getUserSuccess(data, obj.token, dispatch);
      } else {
        message = 'You must login back';
      }
    } else {
      message = obj.token ? 'Data access incorrect.' : 'Username or password incorrect.';
    }
  }
  if (message) {
    getUserActions.getUserFailure(message, dispatch);
  }
};

export const logout = () => async dispatch => {
  removeState('token');
  removeState('tokenExpireDateTime');
  dispatch({ type: actionNames.LOGOUT });
};

export const actionCreators = { getUser, logout };

export default actionCreators;
