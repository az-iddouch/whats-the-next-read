import React, { Component } from 'react';
import './NewToBooks.sass';

export default class NewToBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: {
        classic: {
          body:
            'You prefer getting to know one person deeply, rather than knowing a couple people on the surface.',
          checked: false,
          genre: 'classic'
        },
        fantasy: {
          body: "You're a daydreamer .. and you value friendship over anything.",
          checked: false,
          genre: 'fantasy'
        },
        HistoricalFiction: {
          body: 'You consider yourself a perfectioniste , You hate surprises .',
          checked: false,
          genre: 'Historical Fiction'
        },
        horror: {
          body:
            'Youre a risk taker , story teller and you love the feeling of the adrinaline rising in your body',
          checked: false,
          genre: 'horror'
        },
        literaryFiction: {
          body: "You're a deep thinker and you love to know more about people ",
          checked: false,
          genre: 'Literary Fiction'
        },
        mystery: {
          body: 'You are always searching for the bigger meaning in things ',
          checked: false,
          genre: 'mystery'
        },
        nonFiction: {
          body:
            'You are often looking for new ways to improve yourself and the lives around you . ',
          checked: false,
          genre: 'Non-Fiction'
        },
        romance: {
          body:
            "You're a passionate person at heart, and always go the extra mile to satisfy someone you love. ",
          checked: false,
          genre: 'romance'
        },
        scienceFiction: {
          body: "You're a big fun of either Star trek or Star wars . ",
          checked: false,
          genre: 'science-fiction'
        },
        youngAdult: {
          body:
            "You're in tune with your emotions, and are almost always the one your friends go to when they need solid advice",
          checked: false,
          genre: 'young adult'
        }
      }
    };
  }

  option = (genre, key) => {
    return (
      <div key={genre.genre}>
        <label className="new-to-books__checkbox-label">
          <input
            type="checkbox"
            className="new-to-books__checkbox"
            value={genre.genre}
            onChange={e => this.checkBoxHandler(e, key)}
            checked={this.state.genres[key].checked}
          />
          <span className="new-to-books__checkbox-text">{genre.body}</span>
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
    this.props.history.push(`/generated-book/:${genres[randNum]}`);
  };

  render() {
    return (
      <div className="new-to-books">
        <h2 className="new-to-books__title">New to books.</h2>
        <p className="new-to-books__todo">check all the options that suits your personality ...</p>
        <form className="new-to-books__form" onSubmit={this.formSubmitHandler}>
          {Object.keys(this.state.genres).map(key => this.option(this.state.genres[key], key))}
          <button href="#" type="submit" className="new-to-books__btn">
            Let's go &rarr;
          </button>
        </form>
      </div>
    );
  }
}
