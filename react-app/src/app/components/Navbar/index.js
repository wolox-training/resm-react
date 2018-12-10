import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';

import style from './styles.scss';

class Navbar extends Component {
  render() {
    const links = this.props.links.map((link, i) => (
      <Link key={i.toString()} link={link} logged={this.props.logged} />
    ));
    return <nav className={style.navbar}>{links}</nav>;
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  logged: PropTypes.bool
};

export default Navbar;
