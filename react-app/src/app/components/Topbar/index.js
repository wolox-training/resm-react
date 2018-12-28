import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';

import style from './styles.scss';

class Topbar extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <div className={style.topbar}>
          <img src={this.props.logo} className={style.topbarLogo} alt="logo" />
          <h1 className={style.topbarTitle}>{this.props.title}</h1>
          <Navbar links={this.props.links} logged={this.props.logged} />
          {this.props.logged && (
            <div className={style.topbarUser}>
              {this.props.user && this.props.user.name && this.props.user.name[0]}
            </div>
          )}
        </div>
      </header>
    );
  }
}

Topbar.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.element,
  logged: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.string)
};

export default Topbar;
