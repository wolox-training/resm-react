import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './styles.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className={style.dashboard}>
        <h3 className={style.dashboardTitle}>Dashboard</h3>
        <img className={style.dashboardAvatar} src={this.props.user.avatar} alt="avatar" />
        <ul className={style.dashboardUserInfo}>
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

Dashboard.propTypes = {
  user: PropTypes.objectOf(PropTypes.object)
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);
