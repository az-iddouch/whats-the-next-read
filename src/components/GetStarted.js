import React from 'react';
import './GetStarted.sass';

export default function GetStarted() {
  return (
    <div className="get-started">
      <ul className="get-started__list">
        <li className="get-started__list-item">
          <a href="#" className="get-started__list-link">
            <i className="fas fa-angle-right get-started__list-icon" /> You're
            new to reading books.
            <span className="get-started__list-arrow">&rarr;</span>
          </a>
        </li>
        <li className="get-started__list-item">
          <a href="#" className="get-started__list-link ">
            <i className="fas fa-angle-right get-started__list-icon" /> You've
            read some books already.
            <span className="get-started__list-arrow">&rarr;</span>
          </a>
        </li>
        <li className="get-started__list-item">
          <a href="#" className="get-started__list-link">
            <i className="fas fa-angle-right get-started__list-icon" /> You want
            a total random book suggestion.
            <span className="get-started__list-arrow">&rarr;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
