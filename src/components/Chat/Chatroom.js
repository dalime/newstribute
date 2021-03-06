import React, { Component } from 'react';
import MessageStore from '../../stores/MessageStore';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ChatForm from './ChatForm';
import ChatList from './ChatList';
import ChatActions from '../../actions/ChatActions';

import NavBar from '../NavBar';

export default class Chatroom extends Component {
  constructor() {
    super();

    // POPULATE STATE WITH EXISTING VALUES FROM STORE
    this.state = {
      chatroomObj: MessageStore.getChatroom(),
      messages: MessageStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    // GET INFORMATION FROM STORE FOR CHATROOM ID
    ChatActions.setId(this.props.params.id);
    ChatActions.getChatroom(this.props.params.id);
    ChatActions.getMessages(this.props.params.id);

    // START LISTENING TO MESSAGE STORE
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    // STOP LISTENING TO MESSAGE STORE
    MessageStore.stopListening(this._onChange);
  }

  _onChange() {
    // WHEN STORE CHANGES, SET STATE TO WHAT IS IN STORE
    // *Every time new message is sent*
    this.setState({
      chatroomObj: MessageStore.getChatroom(),
      messages: MessageStore.get()
    })
  }

  render() {
    if (this.state.chatroomObj) {
      let { name, link, summary } = this.state.chatroomObj;
      return (
        <div>
          <NavBar />
          <div className="container col-sm-12 col-md-12 col-lg-12">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <iframe src={link} width="100%"></iframe>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h2>{name}</h2>
              <h4>{summary}</h4>
              <a href={link} target="_blank">{link}</a>
              <hr/>
              <ChatForm chatroomId={this.props.params.id}/>
              <ChatList messages={this.state.messages}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Loading show={true} color="lightgreen" />
      )
    }
  }
}
