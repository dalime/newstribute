import React, { Component } from 'react';

export default class ChatList extends Component {
  render() {
    let { messages } = this.props;

    let Messages = [];

    for (let key in messages) {
      let Message = (
        <li key={key} className="bubble">{messages[key]}</li>
      )
      Messages.push(Message);
    }

    Messages.reverse();

    return (
      <ul className="chatList">
        {Messages}
      </ul>
    )
  }
}
