import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMark, updateStatus } from '../../../redux/Game/actions';

import calculateWinner from './utils';
import Board from './components/Board';
import Moves from './components/Moves';
import style from './styles.scss';

class Game extends Component {
  handleClick = i => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.asMutable().slice();
    if (this.props.winner || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.toggleMark(
      history.concat([{ squares }]),
      history.length,
      !this.props.xIsNext,
      calculateWinner(squares)
    );
  };

  updateStatus() {
    if (this.props.winner) {
      this.props.updateStatus(`Winner: ${this.props.winner}`);
    } else {
      this.props.updateStatus(`Next player: ${this.props.xIsNext ? 'X' : 'O'}`);
    }
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];

    this.updateStatus();

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{this.props.status}</div>
          <Moves />
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
  toggleMark: PropTypes.func,
  updateStatus: PropTypes.func
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  status: state.game.status,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  toggleMark: (history, stepNumber, xIsNext, winner) => {
    dispatch(toggleMark(history, stepNumber, xIsNext, winner));
  },
  updateStatus: status => {
    dispatch(updateStatus(status));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
