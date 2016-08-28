import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './FirebaseInit';

import SearchPage from './components/Search/SearchPage';
import Chatroom from './components/Chat/Chatroom';
import ExistingRooms from './components/Search/ExistingRooms';

import './css/style.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={SearchPage}></Route>
    <Route path="/chat/:id" component={Chatroom}></Route>
    <Route path='/rooms' component={ExistingRooms}></Route>
  </Router>
), document.getElementById('root')
);
