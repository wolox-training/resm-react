import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  return (
    <button className={style.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Square;
