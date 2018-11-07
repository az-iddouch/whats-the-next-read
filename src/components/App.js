import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Home from './Home';
import GetStarted from './GetStarted';
import NewToBooks from './NewToBooks';
import ShowBook from './ShowBook';
import NotFound from './NotFound';
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
              <Route exact path="/getstarted" component={GetStarted} />
              <Route exact path="/philosophy" component={Philosophy} />
              <Route exact path="/new-to-books" component={NewToBooks} />
              <Route exact path="/already-a-book-reader" component={BookReader} />
              <Route exact path="/generated-book/:genre" component={ShowBook} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
