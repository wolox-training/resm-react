import React, { Component, Fragment } from 'react';

import style from './styles.scss';

function WithLoading(WrappedComponent, isLoading) {
  return class extends Component {
    static displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    render() {
      const spinner = (
        <Fragment>
          <span>Loading...</span>
          <div className={style.spinner}>
            <div className={style.bounce1} />
            <div className={style.bounce2} />
            <div className={style.bounce3} />
          </div>
        </Fragment>
      );
      return isLoading ? spinner : <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLoading;
