import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo } from '../../../../../redux/Game/actions';
import calculateWinner from '../../utils';

import style from './styles.scss';

class Move extends Component {
  createHistoryButton(move) {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    const history = this.props.history.slice(0, move + 1);
    const current = history[history.length - 1];
    const squares = current.squares.asMutable().slice();
    return (
      <li>
        <button
          className={style.move}
          onClick={() => this.props.jumpTo(move, move % 2 === 0, calculateWinner(squares))}
        >
          {desc}
        </button>
      </li>
    );
  }

  render() {
    return <Fragment>{this.createHistoryButton(this.props.move)}</Fragment>;
  }
}

Move.propTypes = {
  history: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  move: PropTypes.number,
  jumpTo: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  jumpTo: (stepNumber, xIsNext, winner) => {
    dispatch(jumpTo(stepNumber, xIsNext, winner));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Move);
