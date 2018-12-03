import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CustomField from '../../../../components/Field';

import style from './styles.scss';
import { FIELDS, LOGIN_FORM } from './constants';

class LoginFormLayout extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(props => this.props.submitForm(props))} className={style.loginForm}>
        {this.props.messageLogin && <span className={style.loginMessage}>{this.props.messageLogin}</span>}
        {FIELDS.map(field => (
          <Field component={CustomField} key={field.name} {...field} />
        ))}
        <button type="submit" className={style.loginSubmit}>
          Login
        </button>
      </form>
    );
  }
}

LoginFormLayout.propTypes = {
  messageLogin: PropTypes.string,
  submitForm: PropTypes.func.isRequired
};

export default reduxForm({
  form: LOGIN_FORM
})(LoginFormLayout);
