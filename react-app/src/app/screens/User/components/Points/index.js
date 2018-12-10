import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../redux/Game/actions';
import { POINTS_RULES } from '../../../../constants';

import style from './styles.scss';
import Statistical from './Statistical';

class Points extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  render() {
    const renderStatisticsPoints = () => {
      if (this.props.gamePoints) {
        const points = this.props.gamePoints.points ? this.props.gamePoints.points : 0;
        const count = this.props.gamePoints.count ? this.props.gamePoints.count : 0;
        const pointsByGame =
          this.props.gamePoints.count && this.props.gamePoints.count > 0
            ? Math.round(this.props.gamePoints.points / this.props.gamePoints.count)
            : 0;
        return (
          <Fragment>
            <Statistical title="Points" number={points} />
            <Statistical title="Num. of games" number={count} />
            <Statistical title="Points by game" number={pointsByGame} />
          </Fragment>
        );
      }
      return null;
    };
    const renderRules = () => {
      const rules = POINTS_RULES.map((rule, i) => (
        <li key={i.toString()}>
          Obtain <b>{rule.points} points</b> winning with {rule.moves} moves
        </li>
      ));
      return <ul>{rules}</ul>;
    };
    return (
      <div className={style.points}>
        <div className={style.pointsStatistics}>
          <h3>Points</h3>
          {renderStatisticsPoints()}
        </div>
        <div className={style.pointsRules}>
          <h3>Rules</h3>
          {renderRules()}
        </div>
      </div>
    );
  }
}

Points.propTypes = {
  token: PropTypes.string,
  gamePoints: PropTypes.objectOf(PropTypes.object),
  getUserPoints: PropTypes.func
};

const mapStateToProps = state => ({
  token: state.auth.token,
  gamePoints: state.game.gamePoints,
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
