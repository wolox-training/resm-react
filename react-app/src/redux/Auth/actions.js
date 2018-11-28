import { authService } from '../../services/authService';
import { removeState } from '../localStorage';

export const actionNames = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
  LOGOUT: 'LOGOUT'
};

const responseBad = (message, dispatch) => {
  dispatch({
    type: actionNames.GET_USER_FAILURE,
    messageLogin: message
  });
};

const responseOk = (data, dispatch) => {
  if (data.length > 0) {
    const user = data[0];
    authService.setTokenInHeader(user.token);
    dispatch({
      type: actionNames.GET_USER_SUCCESS,
      user
    });
    // TODO: calculate date and time with EXPIRATION_INTERVALE_MIN from .env and send to tokenExpireDateTime
    authService.setUser(user.id, 'tokenExpireDateTime', '2018/11/29');
  } else {
    responseBad('Username or password incorrect.', dispatch);
  }
};

export const getUser = (email, pass) => async dispatch => {
  dispatch({ type: actionNames.GET_USER });
  const response = await authService.getUser(email, pass);
  if (response.ok) {
    responseOk(response.data, dispatch);
  } else {
    responseBad('Problem to query user or password from api.', dispatch);
  }
};

export const logout = () => async dispatch => {
  removeState('auth');
  dispatch({ type: actionNames.LOGOUT });
};

export const actionCreators = { getUser, logout };

export default actionCreators;
