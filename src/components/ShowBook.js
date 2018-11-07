import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowBook.sass';

export default class ShowBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      genres: [
        'classic',
        'fantasy',
        'fiction history',
        'horror',
        'Literature',
        'mystery',
        'self help',
        'romance',
        'science fiction',
        'fiction'
      ]
    };
  }
  componentDidMount() {
    const genre = this.props.match.params.genre;
    var randgenre = genre;
    if (genre === 'random') {
      const randNum = Math.floor(Math.random() * Math.floor(this.state.genres.length));
      randgenre = this.state.genres[randNum];
    }
    this.fetchBook(randgenre);
  }

  async fetchBook(genre) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=30&langRestrict=en`
    );
    const { items: books } = await res.json();
    if (books) {
      const randNum = Math.floor(Math.random() * Math.floor(books.length));
      this.setState({ book: books[randNum] });
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      book: { volumeInfo: book }
    } = this.state;

    if (!book) {
      return <p className="loading">loading ....</p>;
    }
    return (
      <div className="show-book">
        <h2 className="show-book__header">Here is your perfect match .</h2>
        <div className="show-book__container">
          <div className="show-book__thumbnail">
            <img
              src={`${book.imageLinks.thumbnail}&zoom=3`}
              alt="book image"
              className="show-book__image"
            />
          </div>
          <div className="show-book__details">
            <h2 className="show-book__book-name">{book.title}</h2>
            <p className="show-book__book-authors">
              {book.authors.map(author => (
                <span className="show-book__book-author" key={Date.now()}>
                  {author}
                  {book.authors.length > 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <span className="show-book__book-date">
              <i className="far fa-clock show-book__book-date-icon" />
              {book.publishedDate}
            </span>
            <div className="show-book__row">
              <p className="show-book__book-pg-count">
                Number of pages:{' '}
                <span className="show-book__book-pg-count-value">{book.pageCount} pages</span>
              </p>
              {book.averageRating && (
                <p className="show-book__book-rating">
                  Rating:{' '}
                  <span className="show-book__book-rating-value">
                    {book.averageRating}
                    /5
                  </span>
                </p>
              )}
            </div>
            <p className="show-book__book-description">
              Description:{' '}
              <span className="show-book__book-description-text">{book.description}</span>
            </p>
            <a onClick={this.goBack} className="show-book__btn show-book__btn--back">
              Back
            </a>
            <a
              href={book.previewLink}
              target="_blank"
              className="show-book__btn show-book__btn--preview"
            >
              Read preview !
            </a>
          </div>
        </div>
      </div>
    );
  }
}
