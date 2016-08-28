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
        <div className="container">
          <div className="text-center form-group">
            <h1>NewsRant</h1>
            <h5 style={styles.instructions}></h5>
            <form onSubmit={this._search} className="form-inline">
            <div className="searchDiv">
              <input type="text" onChange={this._onInputChange} className="searchInput" placeholder="Search a topic of interest." size="35" required/>
            </div>
            <button type="submit" className="searchbtn">Search</button>
            </form>
          </div>
          <br/>
          <div>
            <Results />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  instructions: {
    fontStyle: 'italic',
    marginTop: '40px'
  }
}
