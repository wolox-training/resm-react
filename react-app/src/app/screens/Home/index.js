import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './styles.scss';

class Home extends Component {
  render() {
    const renderLogged = logged => {
      if (!logged) {
        return (
          <Fragment>
            <span>To use the game you have to be authenticated</span>
            <Link to="/login">Login</Link>
          </Fragment>
        );
      }
      return (
        <Fragment>
          <span>You are already authenticated</span>
          <Link to="/app">Go Game</Link>
        </Fragment>
      );
    };
    return (
      <div className={style.home}>
        <h2>Home</h2>
        {renderLogged(this.props.logged)}
      </div>
    );
  }
}

Home.propTypes = {
  logged: PropTypes.bool
};

const mapStateToProps = state => ({
  logged: state.auth.logged
});

export default connect(mapStateToProps)(Home);
