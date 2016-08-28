import React, { Component } from 'react';
import SearchActions from '../../actions/SearchActions';
import { browserHistory } from 'react-router';

import Results from './Results';

import NavBar from '../NavBar';

export default class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      searchText: ""
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._search = this._search.bind(this);
    this._navRooms = this._navRooms.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  _search(e) {
    e.preventDefault();
    SearchActions.search(this.state.searchText);
  }

  _navRooms(e) {
    e.preventDefault();
    browserHistory.push('/rooms');
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="jumbotron text-center form-group">
          <form onSubmit={this._search} className="form-inline">
            <input type="text" onChange={this._onInputChange} className="form-control"/>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="container">
          <Results />
        </div>
      </div>
    )
  }
}
