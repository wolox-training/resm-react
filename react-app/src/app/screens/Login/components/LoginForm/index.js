import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUser } from '../../../../../redux/Auth/actions';
import CustomField from '../../../../components/Field';

import { FIELDS, LOGIN_FORM } from './constants';
// TODO
// import { required } from './utils';

class LoginForm extends Component {
  submitForm = ({ email, pass }) => {
    this.props.getUser(email, pass);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(props => this.submitForm(props))} className="login-form">
        {FIELDS.map(field => (
          <Field component={CustomField} key={field.name} {...field} />
        ))}
        <button type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  getUser: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  getUser: (email, pass) => {
    dispatch(getUser(email, pass));
  }
});

export default reduxForm({
  form: LOGIN_FORM,
  fields: ['email', 'pass']
})(
  connect(
    null,
    mapDispatchToProps
  )(LoginForm)
);
