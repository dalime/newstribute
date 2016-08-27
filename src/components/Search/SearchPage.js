import React, { Component } from 'react';
import SearchActions from '../../actions/SearchActions';
import { browserHistory } from 'react-router';

import Results from './Results';

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
      <div className="container">
        <form onSubmit={this._search}>
          <input type="text" onChange={this._onInputChange}/>
          <button type="submit">Search</button>
        </form>
        <Results />
        <button onClick={this._navRooms}>Existing Rooms</button>
      </div>
    )
  }
}
