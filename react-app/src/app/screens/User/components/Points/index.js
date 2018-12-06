import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../redux/Game/actions';

import style from './styles.scss';
import Statistical from './Statistical';

class Points extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  render() {
    const renderStatisticsPoints = (
      <Fragment>
        <Statistical title="Points" number={this.props.points} />
        <Statistical title="Num. of games" number={this.props.gameCount} />
        <Statistical title="Points by game" number={Math.round(this.props.points / this.props.gameCount)} />
      </Fragment>
    );
    const renderRules = (
      <ul>
        <li>
          Obtain <b>10 points</b> winning with 3 moves
        </li>
        <li>
          Obtain <b>8 points</b> winning with 4 moves
        </li>
        <li>
          Obtain <b>6 points</b> winning with 5 moves
        </li>
      </ul>
    );
    return (
      <div className={style.points}>
        <div className={style.pointsStatistics}>
          <h3>Points</h3>
          {renderStatisticsPoints}
        </div>
        <div className={style.pointsRules}>
          <h3>Rules</h3>
          {renderRules}
        </div>
      </div>
    );
  }
}

Points.propTypes = {
  gameCount: PropTypes.number,
  points: PropTypes.number,
  token: PropTypes.string,
  getUserPoints: PropTypes.func
};

const mapStateToProps = state => ({
  gameCount: state.game.gameCount,
  points: state.game.points,
  token: state.auth.token,
  getUserPoints: PropTypes.func
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
