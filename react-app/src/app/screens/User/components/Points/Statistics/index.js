import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Statistical from './Statistical';

class Statistics extends Component {
  render() {
    return (
      <Fragment>
        <Statistical title="Points" number={this.props.points} />
        <Statistical title="Num. of games" number={this.props.gameCount} />
        <Statistical title="Points by game" number={Math.round(this.props.points / this.props.gameCount)} />
      </Fragment>
    );
  }
}

Statistics.propTypes = {
  gameCount: PropTypes.number,
  points: PropTypes.number
};

const mapStateToProps = state => ({
  gameCount: state.game.gameCount,
  points: state.game.points
});

export default connect(mapStateToProps)(Statistics);
