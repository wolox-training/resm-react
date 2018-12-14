import React from 'react';

import { POINTS_RULES } from '../../../../../../constants';

const Rules = () => (
  <ul>
    {POINTS_RULES.map((rule, i) => (
      <li key={i.toString()}>
        Obtain <b>{rule.points} points</b> winning with {rule.moves} moves
      </li>
    ))}
  </ul>
);

export default Rules;
