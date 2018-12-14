import React, { Component } from 'react';

import style from './styles.scss';
import Statistics from './components/Statistics';
import Rules from './components/Rules';

class Points extends Component {
  render() {
    return (
      <div className={style.points}>
        <div className={style.pointsStatistics}>
          <h3>Points</h3>
          <Statistics />
        </div>
        <div className={style.pointsRules}>
          <h3>Rules</h3>
          <Rules />
        </div>
      </div>
    );
  }
}

export default Points;
