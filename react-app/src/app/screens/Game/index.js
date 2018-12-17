import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { USER_PLAYER_MARK, OPONENT_PLAYER_MARK } from '../../constants';
import { actionCreators as gameActions } from '../../../redux/Game/actions';

import { calculateWinner, calculatePoints } from './utils';
import Board from './components/Board';
import Moves from './components/Moves';
import style from './styles.scss';

class Game extends Component {
  handleClick = i => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.asMutable().slice();
    const stepNumber = history.length;
    if (this.props.winner || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? USER_PLAYER_MARK : OPONENT_PLAYER_MARK;
    const userMoveCount = squares.filter(item => item === USER_PLAYER_MARK).length;
    this.props.updateGame(
      history.concat([{ squares }]),
      stepNumber,
      !this.props.xIsNext,
      calculateWinner(squares),
      calculatePoints(userMoveCount),
      this.props.token
    );
  };

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{this.props.status}</div>
          <Moves history={this.props.history} />
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  status: PropTypes.string,
  winner: PropTypes.string,
  token: PropTypes.string,
  updateGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  status: state.game.status,
  winner: state.game.winner,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  updateGame: (history, stepNumber, xIsNext, winner, points, token) => {
    dispatch(gameActions.updateGame({ history, stepNumber, xIsNext, winner, points, token }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
