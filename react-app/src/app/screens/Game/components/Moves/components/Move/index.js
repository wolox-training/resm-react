import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { jumpTo } from '../../../../../../../redux/Game/actions';
import calculateWinner from '../../../../utils';

import style from './styles.scss';

class Move extends Component {
  render() {
    const desc = this.props.move ? `Go to move # ${this.props.move}` : 'Go to game start';
    const history = this.props.history.slice(0, this.props.move + 1);
    const current = history[history.length - 1];
    const squares = current.squares.asMutable().slice();

    return (
      <li>
        <button
          className={style.move}
          onClick={() => {
            this.props.jumpTo(this.props.move, this.props.move % 2 === 0, calculateWinner(squares));
          }}
        >
          {desc}
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
