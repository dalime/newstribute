import React, { Component } from 'react';

export default class ChatList extends Component {
  render() {
    let { messages } = this.props;

    let Messages = [];

    for (let key in messages) {
      let Message = (
        <li className="list-group-item" key={key}>{messages[key]}</li>
      )
      Messages.push(Message);
    }

    Messages.reverse();

    return (
      <ul className="list-group">
        {Messages}
      </ul>
    )
  }
}
