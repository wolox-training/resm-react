import { authService } from '../../services/authService';

export const actionNames = {
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE'
};

export const getUser = (email, pass) => async dispatch => {
  dispatch({ type: actionNames.GET_USER });
  const response = await authService.getUser(email, pass);
  if (response.ok) {
    // TODO
    // eslint-disable-next-line
    alert(`token: ${response.data.token}`);
    if (response.data.length > 0) {
      dispatch({
        type: actionNames.GET_USER_SUCCESS
      });
    } else {
      // TODO
      // eslint-disable-next-line
      alert('Username or password not correct.');
      dispatch({
        type: actionNames.GET_USER_FAILURE
      });
    }
  } else {
    // TODO
    // eslint-disable-next-line
    alert('Problem to query user or password from api.');
    dispatch({
      type: actionNames.GET_USER_FAILURE
    });
  }
};

export const actionCreators = { getUser };

export default actionCreators;
