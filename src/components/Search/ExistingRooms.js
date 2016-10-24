import React, { Component } from 'react';
import MessageStore from '../../stores/MessageStore';
import NavBar from '../NavBar';
import ChatActions from '../../actions/ChatActions';
import { Link } from 'react-router';

export default class ExistingRooms extends Component {
  constructor() {
    super();

    // GET ALL AVAILALBE CHATROOMS FROM FIREBASE
    this.state = {
      rooms: MessageStore.getChatrooms()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    // GET ALL AVAILABLE CHATROOMS FROM FIREBASE
    ChatActions.getChatrooms();
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MessageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      rooms: MessageStore.getChatrooms()
    })
  }

  render() {
    let { rooms } = this.state;

    if (rooms) {
      const Rooms = rooms.map((room, index) => {
        // SET PATH DYNAMICALLY AS FIREBASE DOCUMENT ID
        let path = '/chat/' + room.key

        // A LINK FOR EACH CHATROOM so users can navigate in
        return (
          <Link key={index} to={path} className="list-group-item">{room.name}</Link>
        )
      })

      // REVERSE TO SHOW NEW CHATROOMS ON TOP
      Rooms.reverse();

      return (
        <div>
          <NavBar/>
          <div className="container">
            <h1>Active Chatrooms</h1>
            <ul className="list-group">
              {Rooms}
            </ul>
          </div>
        </div>
      )
    } else {
      <h1>Loading...</h1>
    }
  }
}
