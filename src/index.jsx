import styles from 'screen.sass';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import AboutBook from './components/AboutBook';
import AboutEmbeds from './components/AboutEmbeds';
import Home from './components/Home';
import MissingRoute from './components/MissingRoute';
import Landing from './components/Landing';
import Todo from './components/todo/TodoApp';
import SearchComponent from './components/search/SearchComponent';


const history = createBrowserHistory();

render((
  <Router history={history}>
    <div>
      <Landing>
        <Switch>
          <Route path="/" exact component={Todo} />
          <Route path="/book" component={AboutBook} />
          <Route path="/embeds" component={AboutEmbeds} />
          <Route path="/search" component={SearchComponent} />
          <Route path="/todo" component={Todo} />
          <Route path="*" component={MissingRoute} />
        </Switch>
      </Landing>
    </div>
  </Router>
), document.getElementById('app'));


