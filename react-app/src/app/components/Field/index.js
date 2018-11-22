import React from 'react';

import style from './styles.scss';

function Field({ input, label, type, meta: { touched, error } }) {
  return (
    <div className={style.fieldContainer}>
      <span>{label}</span>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className={`error error-${input.name}`}>{error}</span>}
    </div>
  );
}

export default Field;
