import React from 'react';
import { Link } from 'react-router-dom';
import './Home.sass';

export default function Home() {
  return (
    <div className="home__content-box">
      <h1 className="home__hero">
        Discover your next read <br />
        <span className="home__hero-span">today</span> now.
      </h1>
      <p className="home__sub-heading">
        No matter what your situationn is, new to reading books, already a books
        lover, you want a next book to read ... <br />
        this app is for you. We got you covered 😉
      </p>
      <Link to="/getstarted" className="home__cta">
        get started &rarr;
      </Link>
    </div>
  );
}
