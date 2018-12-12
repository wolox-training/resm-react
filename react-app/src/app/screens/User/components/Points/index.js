import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../redux/Game/actions';

import style from './styles.scss';
import Statistics from './Statistics';
import Rules from './Rules';

class Points extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  render() {
    return (
      <div className={style.points}>
        <div className={style.pointsStatistics}>
          <h3>Points</h3>
          <Statistics />
        </div>
        <div className={style.pointsRules}>
          <h3>Rules</h3>
          <Rules />
        </div>
      </div>
    );
  }
}

Points.propTypes = {
  token: PropTypes.string,
  getUserPoints: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  getUserPoints: token => {
    dispatch(getUserPoints({ token }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Points);
