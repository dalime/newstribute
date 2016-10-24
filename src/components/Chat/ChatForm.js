import React, { Component } from 'react';
import ChatActions from '../../actions/ChatActions';

export default class ChatForm extends Component {
  constructor() {
    super();

    this.state = {
      messageText: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onInputChange(e) {
    // SET VALUE OF TEXT TO CHAT BASED ON INPUT VALUE
    let messageText = e.target.value;
    this.setState({ messageText })
  }

  _onSubmit(e) {
    e.preventDefault();
    let { messageText } = this.state;
    
    // CREATES NEW MESSAGE WITH MESSAGETEXT STATE
    ChatActions.createMessage(this.props.chatroomId, messageText);

    // SET STATE TO EMPTY TO CLEAR TEXTINPUT
    this.setState({
      messageText: ''
    });
  }

  render() {
    let { messageText } = this.state;

    return (
      <div className="form-group">
        <form onSubmit={this._onSubmit} className="form-inline">
          <input type="text" value={messageText} onChange={this._onInputChange} required className="form-control"/>
          <button className="btn btn-primary btn-md">Send</button>
        </form>
      </div>
    )
  }
}
