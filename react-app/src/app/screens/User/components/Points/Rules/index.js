import React, { Component } from 'react';

import { POINTS_RULES } from '../../../../../constants';

class Rules extends Component {
  renderRules = () => {
    const rules = POINTS_RULES.map((rule, i) => (
      <li key={i.toString()}>
        Obtain <b>{rule.points} points</b> winning with {rule.moves} moves
      </li>
    ));
    return <ul>{rules}</ul>;
  };
  render() {
    return this.renderRules();
  }
}

export default Rules;
