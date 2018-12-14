import { isEmail, minLength, required } from './validate';

export const FIELDS = [
  { label: 'Email: ', name: 'email', type: 'email', validate: [isEmail, required] },
  { label: 'Password: ', name: 'pass', type: 'password', validate: [minLength, required] }
];

export const PASSWORD_SIZE = 8;

export const LOGIN_FORM = 'Login';

export const CONSTANTS = { FIELDS, PASSWORD_SIZE, LOGIN_FORM };
