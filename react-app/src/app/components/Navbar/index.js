import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './styles.scss';

class Navbar extends Component {
  renderLink = (link, i) => {
    if ((link.restrict && this.props.logged) || !link.restrict) {
      return (
        <NavLink
          key={i.toString()}
          to={link.to}
          exact
          activeClassName={style.navbarActive}
          className={style.navbarLink}
          onClick={link.onClick}
        >
          <FontAwesomeIcon icon={link.icon} />
          &nbsp;
          {link.name}
        </NavLink>
      );
    }
    return null;
  };

  render() {
    if (this.props.logged) {
      const links = this.props.links.map(this.renderLink);
      return <nav className={style.navbar}>{links}</nav>;
    }
    return null;
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  logged: PropTypes.bool
};

export default Navbar;
