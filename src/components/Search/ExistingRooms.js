import React, { Component } from 'react';
import MessageStore from '../../stores/MessageStore';
import NavBar from '../NavBar';
import ChatActions from '../../actions/ChatActions';
import { Link } from 'react-router';

export default class ExistingRooms extends Component {
  constructor() {
    super();

    this.state = {
      rooms: MessageStore.getChatrooms()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
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
        let path = '/chat/' + room.key

        return (
          <Link key={index} to={path} className="list-group-item">{room.name}</Link>
        )
      })

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
