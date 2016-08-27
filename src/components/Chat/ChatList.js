import React, { Component } from 'react';

export default class ChatList extends Component {
  render() {
    let { messages } = this.props;

    let Messages = [];

    for (let key in messages) {
      let Message = (
        <li key={key}>{messages[key]}</li>
      )
      Messages.push(Message);
    }

    return (
      <ul>
        {Messages}
      </ul>
    )
  }
}
