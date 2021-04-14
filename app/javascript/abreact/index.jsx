import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { logger } from 'redux-logger';

import '../assets/stylesheets/application.scss';
import Main from './containers/main.jsx';
import About from './components/about.jsx';
import Work from './components/work.jsx';
import Connect from './components/connect.jsx';
import langReducer from './reducers/lang_reducer.js';

const initialState = {
  //ip: JSON.parse(app.dataset.ip),
  //ip: '5.38.128.0',
  //ip: '170.253.46.238',
  ip: '2.16.8.255',
  lang: ""
}
const reducers = combineReducers({
  ip: (state = null, action) => state,
  lang: langReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={Work} />
        <Route path="/connect" exact component={Connect} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
