import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo } from '../../../../../../../redux/Game/actions';
import calculateWinner from '../../../../utils';

import style from './styles.scss';

class Move extends Component {
  state = {
    squares: [],
    winner: null,
    desc: ''
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = null;
    const newDesc = nextProps.move ? `Go to move # ${nextProps.move}` : `Go to game start`;
    const current = nextProps.history[nextProps.history.length - 1];
    const newSquares = current.squares.asMutable().slice();
    if (newDesc !== prevState.desc) {
      newState = { desc: newDesc };
    }
    if (newSquares !== prevState.squares) {
      newState = {
        ...newState,
        history: nextProps.history,
        squares: newSquares,
        winner: calculateWinner(newSquares)
      };
    }
    return newState;
  }
  jumpTo = () => {
    this.props.jumpTo(this.props.move, this.props.move % 2 === 0, this.state.winner);
  };
  render() {
    return (
      <li>
        <button className={style.move} onClick={this.jumpTo}>
          {this.state.desc}
        </button>
      </li>
    );
  }
}

Move.propTypes = {
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
