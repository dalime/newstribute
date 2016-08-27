import React, { Component } from 'react';
import MessageStore from '../../stores/MessageStore';
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
          <Link key={index} to={path}><p>{room.name}</p></Link>
        )
      })
      return (
        <div className="container">
          <h1>Rooms</h1>
          {Rooms}
        </div>
      )
    } else {
      <h1>Loading...</h1>
    }

  }
}
