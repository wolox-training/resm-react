import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo } from '../../../../../../../redux/Game/actions';
import calculateWinner from '../../../../utils';

import style from './styles.scss';

class Move extends Component {
  state = {
    history: this.props.history,
    squares: [],
    winner: null,
    desc: this.props.move ? `Go to move # ${this.props.move}` : `Go to game start`
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.history !== prevState.history) {
      const current = nextProps.history[nextProps.history.length - 1];
      const currentSquares = current.squares.asMutable().slice();
      return {
        history: nextProps.history,
        squares: currentSquares,
        winner: calculateWinner(currentSquares)
      };
    }
    return null;
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
