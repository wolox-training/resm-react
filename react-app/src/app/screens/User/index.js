import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './styles.scss';

class User extends Component {
  render() {
    return (
      <div className={style.user}>
        <h3 className={style.userTitle}>Dashboard</h3>
        <img className={style.uservatar} src={this.props.user.avatar} alt="avatar" />
        <ul className={style.userInfo}>
          <li>
            <span>Name: </span> {this.props.user.name}
          </li>
          <li>
            <span>Username: </span> {this.props.user.username}
          </li>
          <li>
            <span>Email: </span> {this.props.user.email}
          </li>
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.object)
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(User);
