import React, { Component } from 'react';

export default class ShowBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {}
    };
  }
  componentDidMount() {
    const genre = this.props.match.params.genre;
    this.fetchBook(genre);
  }

  async fetchBook(genre) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=20`
    );
    const { items: books } = await res.json();
    const randNum = Math.floor(Math.random() * Math.floor(books.length));
    this.setState({ book: books[randNum] });
  }

  render() {
    const {
      book: { volumeInfo }
    } = this.state;

    if (!volumeInfo) {
      return <h2>loading ....</h2>;
    }
    return (
      <div className="show-book">
        <div className="show-book__thumbnail">
          {/* <p>{maturityRating}</p> */}
          {/* <img src={thumbnail} alt="book thumnail" /> */}
          <p>{volumeInfo.title}</p>
        </div>
      </div>
    );
  }
}
