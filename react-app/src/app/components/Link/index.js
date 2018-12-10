import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './styles.scss';

class Link extends Component {
  renderLink = (link, key) => {
    if ((link.restrict && this.props.logged) || !link.restrict) {
      return (
        <NavLink
          key={key}
          to={link.to ? link.to : '#'}
          exact
          activeClassName={style.linkActive}
          className={style.link}
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
    return this.renderLink(this.props.link, this.props.key);
  }
}

Link.propTypes = {
  link: PropTypes.element,
  logged: PropTypes.bool,
  key: PropTypes.string
};

export default Link;
