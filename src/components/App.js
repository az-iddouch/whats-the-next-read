import React, { Component } from 'react';
import Header from './partials/Header';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="inner">
        <div className="App">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
