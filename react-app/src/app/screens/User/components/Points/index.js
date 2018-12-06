import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// TODO: implementate points logic
class Points extends Component {
  render() {
    return (
      <div>
        <h3>Points</h3>
        <span>{`gameCount: ${this.props.gameCount}`}</span>
        <br />
        <span>{`points: ${this.props.points}`}</span>
        <br />
        <span>{`historyPoints: ${this.props.historyPoints}`}</span>
        <br />
        <p>
          <h4>Rules:</h4>
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
        </p>
      </div>
    );
  }
}

Points.propTypes = {
  gameCount: PropTypes.number,
  points: PropTypes.number,
  historyPoints: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  gameCount: state.game.gameCount,
  points: state.game.points,
  historyPoints: state.game.historyPoints
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps)(Points);

// export default Points;
