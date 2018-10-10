import React, { Component } from 'react';
import './Header.sass';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#" className="header__logo">
          WhatsTheNextRead .
        </a>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <a href="#" className="navigation__link">
                Already a reader
              </a>
            </li>
            <li className="navigation__list-item">
              <a href="#" className="navigation__link">
                New to reading
              </a>
            </li>
            <li className="navigation__list-item">
              <a href="#" className="navigation__link">
                I feel lucky
              </a>
            </li>
            <li className="navigation__list-item">
              <a href="#" className="navigation__link">
                Philosophy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
