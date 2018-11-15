import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import gameActions from '../../../redux/game/actions';

import calculateWinner from './utils';
import Board from './components/Board';
import style from './styles.scss';

class Game extends Component {
  handleClick = i => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.toggleMark(history.concat([{ squares }]), history.length, !this.props.xIsNext);
  };

  createHistoryButton(move) {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    return (
      <li key={move.toString()}>
        <button onClick={() => this.props.jumpTo(move, move % 2 === 0)}>{desc}</button>
      </li>
    );
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => this.createHistoryButton(move));

    if (winner) {
      this.props.updateStatus(`Winner: ${winner}`);
    } else {
      this.props.updateStatus(`Next player: ${this.props.xIsNext ? 'X' : 'O'}`);
    }

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
  jumpTo: PropTypes.func,
  toggleMark: PropTypes.func,
  updateStatus: PropTypes.func
};

function mapStateToProps(state) {
  return {
    history: state.game.history,
    stepNumber: state.game.stepNumber,
    xIsNext: state.game.xIsNext,
    status: state.game.status
  };
}

const mapDispatchToProps = {
  ...gameActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
