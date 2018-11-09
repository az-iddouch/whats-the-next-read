import React, { Component } from 'react';
import './BookReader.sass';

export default class BookReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: {
        classic: {
          checked: false,
          genre: 'classic'
        },
        fantasy: {
          checked: false,
          genre: 'fantasy'
        },
        HistoricalFiction: {
          checked: false,
          genre: 'fiction history'
        },
        horror: {
          checked: false,
          genre: 'horror'
        },
        literaryFiction: {
          checked: false,
          genre: 'Literature'
        },
        mystery: {
          checked: false,
          genre: 'mystery'
        },
        nonFiction: {
          checked: false,
          genre: 'self help'
        },
        romance: {
          checked: false,
          genre: 'romance'
        },
        scienceFiction: {
          checked: false,
          genre: 'science fiction'
        },
        youngAdult: {
          checked: false,
          genre: 'fiction'
        }
      },
      error: ''
    };
  }

  option = (genre, key) => {
    return (
      <div key={genre.genre}>
        <label className="book-reader__checkbox-label">
          <input
            type="checkbox"
            className="book-reader__checkbox"
            value={genre.genre}
            onChange={e => this.checkBoxHandler(e, key)}
            checked={this.state.genres[key].checked}
          />
          <span className="book-reader__checkbox-text">{genre.genre}</span>
        </label>
        <br />
      </div>
    );
  };

  checkBoxHandler = (e, key) => {
    const genres = { ...this.state.genres };
    genres[key].checked = e.target.checked;
    this.setState({ genres });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const genres = Object.keys(this.state.genres)
      .filter(key => this.state.genres[key].checked)
      .reduce((arr, key) => {
        arr.push(this.state.genres[key].genre);
        return arr;
      }, []);
    const randNum = Math.floor(Math.random() * Math.floor(genres.length));
    if (genres.length !== 0) {
      this.props.history.push(`/generated-book/${genres[randNum]}`);
    }
    this.setState({ error: 'you must select at least one option !' });
  };

  clearError = () => {
    this.setState({ error: '' });
  };

  render() {
    return (
      <div className="book-reader">
        <h2 className="book-reader__title">Already a book reader .</h2>
        <p className="book-reader__todo">check all the genres that you've enjoyed before ...</p>
        <form className="book-reader__form" onSubmit={this.formSubmitHandler}>
          {Object.keys(this.state.genres).map(key => this.option(this.state.genres[key], key))}
          {/* to handle errors */}
          {this.state.error && (
            <div className="error">
              <p className="error__text">{this.state.error}</p>
              <div className="error__close" onClick={this.clearError}>
                &times;
              </div>
            </div>
          )}
          <button href="#" type="submit" className="book-reader__btn">
            Let's go &rarr;
          </button>
        </form>
      </div>
    );
  }
}
