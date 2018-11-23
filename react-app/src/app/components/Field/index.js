import React from 'react';

import style from './styles.scss';

function Field({ input, label, type, meta: { touched, error } }) {
  return (
    <div className={style.fieldContainer}>
      <span className={style.fieldLabel}>{label}</span>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className={style.error}>{error}</span>}
    </div>
  );
}

export default Field;
