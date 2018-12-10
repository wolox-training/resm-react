import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './styles.scss';

class User extends Component {
  render() {
    const renderUser = user => {
      if (user) {
        return (
          <div className={style.user}>
            <h3 className={style.userTitle}>Dashboard</h3>
            <img className={style.uservatar} src={user && user.avatar} alt="avatar" />
            <ul className={style.userInfo}>
              <li>
                <span>Name: </span> {user.name}
              </li>
              <li>
                <span>Username: </span> {user.username}
              </li>
              <li>
                <span>Email: </span> {user.email}
              </li>
            </ul>
          </div>
        );
      }
      return null;
    };

    return renderUser(this.props.user);
  }
}

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.object)
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(User);
