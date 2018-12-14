import { authService } from '../../services/authService';
import { TOKEN_EXPIRATION_MILISECONDS } from '../../app/constants';

export const actionNames = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE'
};

const getUserActions = {
  getUserSuccess: (data, token, dispatch) => {
    const tokenExpireDateTime = new Date().getTime() + TOKEN_EXPIRATION_MILISECONDS;
    dispatch({
      type: actionNames.GET_USER_SUCCESS,
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.username,
      token: data.token,
      tokenExpireDateTime
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
  const dataNow = new Date().getTime();
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
      if ((obj.email && obj.pass) || (obj.token && dataNow <= data.tokenExpireDateTime)) {
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
