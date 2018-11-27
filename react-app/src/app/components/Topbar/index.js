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
    const links = this.props.links.map((link, i) => this.renderLink(link, i));
    return (
      <header className={style.topbar} style={this.props.style}>
        <img src={this.props.logo} className={style.topbarLogo} alt="logo" />
        <h1 className={style.topbarTitle}>{this.props.title}</h1>
        <nav className={style.topbarNav}>{links}</nav>
        {this.props.logged && <div className={style.topbarUser}>{this.props.user.name.substring(0, 1)}</div>}
      </header>
    );
  }
}

Topbar.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  logged: PropTypes.bool,
  user: PropTypes.objectOf(PropTypes.string)
};

export default Topbar;
