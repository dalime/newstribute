import React, { Component } from 'react';
import SearchStore from '../../stores/SearchStore';
import { browserHistory } from 'react-router';

import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

import ChatActions from '../../actions/ChatActions';
import MessageStore from '../../stores/MessageStore';
import IdStore from '../../stores/IdStore';

export default class Results extends Component {
  constructor() {
    super();

    this.state = {
      results: SearchStore.getResults(),
    }

    this._onChange = this._onChange.bind(this);
    this._createChatRoom = this._createChatRoom.bind(this);
  }

  componentDidMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: SearchStore.getResults(),
    })
  }

  _createChatRoom(title, link, summary) {
    ChatActions.createChatroom(title)
    let id = MessageStore.getKey();
    let newObj = {
      title, link, summary
    }
    ChatActions.createChatroomDetails(newObj);
    ChatActions.setId(id);
    browserHistory.push(`/chat/${id}`);
  }

  render() {
    if (this.state.results) {
      const Results = this.state.results.map((result, index) => {
        return (
          <div key={index}>
            <h2 onClick={this._createChatRoom.bind(null, result.title, result.link, result.summary)}>{result.title}</h2>
            <a href={result.link}>{result.link}</a>
            <p>{result.summary}</p>
          </div>
        )
      })

      return (
        <div>
        {Results}
        </div>
      )

    } else {
      <Loading show={true} color="blue" />
    }

  }
}
