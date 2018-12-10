import { PASSWORD_SIZE } from './constants';

export const isEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const minLength = value =>
  value && value.length < PASSWORD_SIZE
    ? `Password must be at least ${PASSWORD_SIZE} characters long`
    : undefined;

export const required = value => (!value ? 'Required' : undefined);

export const validate = { isEmail, minLength, required };

export default validate;
