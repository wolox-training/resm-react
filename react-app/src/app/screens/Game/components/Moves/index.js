import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Move from './components/Move';

class Moves extends Component {
  render() {
    const history = this.props.history;
    const moves = history.map((step, move) => (
      <Move key={move.toString()} history={history.slice(0, move + 1)} move={move} />
    ));
    return <ol>{moves}</ol>;
  }
}

Moves.propTypes = {
  history: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default Moves;
