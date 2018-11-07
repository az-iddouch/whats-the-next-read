import React from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.sass';

export default function GetStarted() {
  return (
    <div className="get-started">
      <ul className="get-started__list">
        <li className="get-started__list-item">
          <Link to="/new-to-books" className="get-started__list-link">
            <i className="fas fa-angle-right get-started__list-icon" /> You're new to reading books.
            <span className="get-started__list-arrow">&rarr;</span>
          </Link>
        </li>
        <li className="get-started__list-item">
          <Link to="/already-a-book-reader" className="get-started__list-link ">
            <i className="fas fa-angle-right get-started__list-icon" /> You've read some books
            already.
            <span className="get-started__list-arrow">&rarr;</span>
          </Link>
        </li>
        <li className="get-started__list-item">
          <Link to="/generated-book/random" className="get-started__list-link">
            <i className="fas fa-angle-right get-started__list-icon" /> You want a total random book
            suggestion.
            <span className="get-started__list-arrow">&rarr;</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
