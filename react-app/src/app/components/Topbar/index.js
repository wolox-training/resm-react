import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './styles.scss';

class Topbar extends Component {
  renderLink = (link, i) => {
    if ((link.restrict && this.props.logged) || !link.restrict) {
      return (
        <NavLink
          key={i.toString()}
          to={link.to}
          exact
          activeClassName={style.topbarActive}
          className={style.topbarLink}
          onClick={link.isLogout && this.props.logout}
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
    const links = this.props.links.map(this.renderLink);
    return (
      <header className={this.props.className}>
        <div className={style.topbar}>
          <img src={this.props.logo} className={style.topbarLogo} alt="logo" />
          <h1 className={style.topbarTitle}>{this.props.title}</h1>
          <nav className={style.topbarNav}>{links}</nav>
          {this.props.logged && <div className={style.topbarUser}>{this.props.user.name[0]}</div>}
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
  logout: PropTypes.func,
  user: PropTypes.objectOf(PropTypes.string)
};

export default Topbar;
