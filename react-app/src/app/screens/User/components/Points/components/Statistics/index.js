import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../../../redux/Game/actions';

import Statistical from './components/Statistical';

class Statistics extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  render() {
    if (this.props.gamePoints) {
      return (
        <Fragment>
          <Statistical title="Points" number={this.props.gamePoints.points} />
          <Statistical title="Num. of games" number={this.props.gamePoints.count} />
          <Statistical
            title="Points by game"
            number={Math.round(this.props.gamePoints.points / this.props.gamePoints.count)}
          />
        </Fragment>
      );
    }
    return null;
  }
}

Statistics.propTypes = {
  token: PropTypes.string,
  gamePoints: PropTypes.objectOf(PropTypes.object),
  getUserPoints: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  gamePoints: state.game.gamePoints
});

const mapDispatchToProps = dispatch => ({
  getUserPoints: token => {
    dispatch(getUserPoints({ token }));
  }
});

// Statistics.propTypes = {
//   gameCount: PropTypes.number,
//   points: PropTypes.number
// };

// const mapStateToProps = state => ({
//   gameCount: state.game.gameCount,
//   points: state.game.points
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);
