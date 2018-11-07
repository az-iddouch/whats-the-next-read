import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.sass';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header__logo">
          WhatsTheNextRead .
        </Link>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <NavLink to="/already-a-book-reader" className="navigation__link">
                Already a reader
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/new-to-books" className="navigation__link">
                New to reading
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/generated-book/random" className="navigation__link">
                I feel lucky
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink to="/philosophy" className="navigation__link">
                Philosophy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
