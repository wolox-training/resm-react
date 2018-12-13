import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Statistical extends Component {
  render() {
    return (
      <div className={style.statisticalData}>
        <span className={style.statisticalDataTitle}>{this.props.title}</span>
        <span className={style.statisticalDataNumber}>{this.props.number}</span>
      </div>
    );
  }
}

Statistical.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number
};

export default Statistical;
