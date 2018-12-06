import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './styles.scss';

class Snapshot extends Component {
  render() {
    return (
      <div key={this.props.key} className={style.snapshot}>
        <div className={style.snapshotIcon}>
          <FontAwesomeIcon icon="clock" size="2x" />
        </div>
        <div className={style.snapshotInfo}>
          <span className={style.snapshotInfoDate}>{this.props.date}</span>
          <span className={style.snapshotInfoPoints}>{this.props.points}</span>
        </div>
      </div>
    );
  }
}

Snapshot.propTypes = {
  key: PropTypes.string,
  date: PropTypes.string,
  points: PropTypes.number
};

export default Snapshot;
