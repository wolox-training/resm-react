import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo, toggleMark, updateStatus } from '../../../redux/Game/actions';

import calculateWinner from './utils';
import Board from './components/Board';
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

  createHistoryButton(move) {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    const history = this.props.history.slice(0, move + 1);
    const current = history[history.length - 1];
    const squares = current.squares.asMutable().slice();
    return (
      <li key={move.toString()}>
        <button onClick={() => this.props.jumpTo(move, move % 2 === 0, calculateWinner(squares))}>
          {desc}
        </button>
      </li>
    );
  }

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
    const moves = history.map((step, move) => this.createHistoryButton(move));

    this.updateStatus();

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style.gameInfo}>
          <div>{this.props.status}</div>
          <ol>{moves}</ol>
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
  jumpTo: PropTypes.func,
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
  jumpTo: (stepNumber, xIsNext) => {
    dispatch(jumpTo(stepNumber, xIsNext));
  },
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
