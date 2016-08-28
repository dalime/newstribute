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
      chatroomObj: MessageStore.getChatroom(),
      //chatroomObj: MessageStore.getNewChatroom(),
      messages: MessageStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ChatActions.setId(this.props.params.id);
    ChatActions.getChatroom(this.props.params.id);
    ChatActions.getMessages(this.props.params.id);
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MessageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      chatroomObj: MessageStore.getChatroom(),
      messages: MessageStore.get()
    })
  }

  render() {
    if (this.state.chatroomObj) {
      let { name, link, summary } = this.state.chatroomObj;
      return (
        <div className="container col-sm-12 col-md-12 col-lg-12">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <iframe src={link} width="100%"></iframe>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <h2>{name}</h2>
            <h4>{summary}</h4>
            <a href={link} target="_blank">{link}</a>
            <ChatForm chatroomId={this.props.params.id}/>
            <ChatList messages={this.state.messages}/>
          </div>
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

}
