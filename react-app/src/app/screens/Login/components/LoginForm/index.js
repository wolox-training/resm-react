import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUser } from '../../../../../redux/Auth/actions';
import CustomField from '../../../../components/Field';

import style from './styles.scss';
import { FIELDS, LOGIN_FORM } from './constants';

class LoginForm extends Component {
  submitForm = ({ email, pass }) => {
    this.props.getUser(email, pass);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <form onSubmit={handleSubmit(props => this.submitForm(props))} className={style.loginForm}>
          {this.props.messageLogin && <span className={style.loginMessage}>{this.props.messageLogin}</span>}
          {FIELDS.map(field => (
            <Field component={CustomField} key={field.name} {...field} />
          ))}
          <button type="submit" className={style.loginSubmit}>
            Login
          </button>
        </form>
      </Fragment>
    );
  }
}

LoginForm.propTypes = {
  messageLogin: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  getUser: PropTypes.func
};

const mapStateToProps = state => ({
  messageLogin: state.auth.messageLogin
});

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
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
