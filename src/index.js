import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';
import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
