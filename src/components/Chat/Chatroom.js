import React, { Component } from 'react';
import MessageStore from '../../stores/MessageStore';
import IdStore from '../../stores/IdStore';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import ChatActions from '../../actions/ChatActions';

export default class Chatroom extends Component {
  constructor() {
    super();

    this.state = {
      chatroomObj: MessageStore.getNewChatroom(),
      messages: MessageStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ChatActions.setId(this.props.params.id);
    ChatActions.getMessages(this.props.params.id);
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MessageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      chatroomObj: MessageStore.getNewChatroom(),
      messages: MessageStore.get()
    })
  }

  render() {
    if (this.state.chatroomObj) {
      let { title, link, summary } = this.state.chatroomObj;

      return (
        <div>
        <h1>{title}</h1>
        <h2>{link}</h2>
        <h3>{summary}</h3>
        <ChatForm chatroomId={this.props.params.id}/>
        <ChatList messages={this.state.messages}/>
        </div>
      )
    } else {
      <Loading show={true} color="blue" />
    }
  }

}
