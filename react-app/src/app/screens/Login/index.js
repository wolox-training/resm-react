import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  state = {
    submitted: false
  };
  submitForm = () => this.setState({ submitted: true });
  cleanForm = () => this.setState({ submitted: false });

  render() {
    const submitted = this.state.submitted;
    return (
      <div className="login-layout">
        {submitted ? <div>Logged</div> : <LoginForm onSubmit={this.submitForm} />}
      </div>
    );
  }
}

export default Login;
