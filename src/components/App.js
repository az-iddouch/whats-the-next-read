import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Home from './Home';
import GetStarted from './GetStarted';
import NewToBooks from './NewToBooks';
import ShowBook from './ShowBook';
import Philosophy from './Philosophy';
import BookReader from './BookReader';
import './App.sass';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="inner">
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/getstarted" component={GetStarted} />
              <Route path="/philosophy" component={Philosophy} />
              <Route path="/new-to-books" component={NewToBooks} />
              <Route path="/already-a-book-reader" component={BookReader} />
              <Route path="/generated-book/:genre" component={ShowBook} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
