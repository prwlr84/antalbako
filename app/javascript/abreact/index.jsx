import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';

import Main from './containers/main.jsx';
import About from './components/about.jsx';
import Work from './containers/work.jsx';
import Connect from './components/connect.jsx';
import langReducer from './reducers/lang_reducer.js';

const app = document.querySelector('#portfolio_app');
const initialState = {
  //ip: JSON.parse(app.dataset.ip),
  ip: gon.ip,
  lang: '',
  ranks: gon.ranks,
  work: gon.work
}
const reducers = combineReducers({
  ip: (state = null, action) => state,
  ranks: (state = null, action) => state,
  work: (state = null, action) => state,
  lang: langReducer
});

const middlewares = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route>
          <Route path="/" exact component={Main}/>
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/connect" exact component={Connect} />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('portfolio_app')
);
