import React, { Component } from 'react';

export default class ChatList extends Component {
  render() {
    let { messages } = this.props;

    let Messages = [];

    for (let key in messages) {
      // RENDER AN LI ELEMENT FOR EACH ELEMENT IN MESSAGE ARRAY
      let Message = (
        <li key={key} className="bubble">{messages[key]}</li>
      )

      // PUSH THAT ELEMENT INTO THE ARRAY
      Messages.push(Message);
    }

    // REVERSE THE ARRAY BEFORE RENDERING TO SHOW NEW ONES ON TOP
    Messages.reverse();

    return (
      <ul className="chatList">
        {Messages}
      </ul>
    )
  }
}
