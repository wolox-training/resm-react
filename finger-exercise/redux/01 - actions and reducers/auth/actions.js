export const actions = { 
  LOG_IN: '@@AUTH/LOG-IN'
};

export default {
  logIn: (email, token) => ({
    type: actions.LOG_IN,
    payload: {
      email,
      token
    }
  })
};
