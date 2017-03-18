import styles from 'screen.sass';
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import World from './components/World';
import AboutBook from './components/AboutBook';
import AboutEmbeds from './components/AboutEmbeds';
import Home from './components/Home';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

"use strict";

render((
    <Router history={history}>
        <Landing path="/">
            <Route path="/" component={Home}/>
            <Route path="/book" component={AboutBook}/>
            <Route path="/embeds" component={AboutEmbeds}/>
        </Landing>
    </Router>
), document.getElementById('app'));
