import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CustomField from '../../../../components/Field';

import { FIELDS, LOGIN_FORM } from './constants';
// import { required } from './utils';

function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      {FIELDS.map(field => (
        <Field component={CustomField} key={field.name} {...field} />
      ))}
      <button type="submit">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: LOGIN_FORM
})(LoginForm);
