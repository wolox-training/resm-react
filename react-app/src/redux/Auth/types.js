import { createTypes, completeTypes } from 'redux-recompose';

export const actionNames = createTypes(completeTypes(['GET_USER'], ['SET_TOKEN', 'LOGOUT']), '@@AUTH');
