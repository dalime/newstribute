import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './FirebaseInit';

import SearchPage from './components/Search/SearchPage';
import Chatroom from './components/Chat/Chatroom';
import ExistingRooms from './components/Search/ExistingRooms';

render((
  <Router history={browserHistory}>
    <Route path="/" component={SearchPage}/>
    <Route path="/chat/:id" component={Chatroom}/>
    <Route path='/rooms' component={ExistingRooms}/>
  </Router>
), document.getElementById('root')
);
