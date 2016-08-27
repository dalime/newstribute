import { EventEmitter } from 'events';
import firebase from 'firebase';
import AppDispatcher from '../AppDispatcher';

import IdStore from './IdStore';

let _messages = {};
let _chatrooms = [];
let _newChatroom = {};
let thisChatroom;
let _chatRoom = {};
let _newKey;

class MessageStore extends EventEmitter {
  constructor() {
    super();

    let chatroomRef = firebase.database().ref('chatrooms');
    let existingRoomsRef = firebase.database().ref('existingrooms');

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GET_MESSAGES':
            thisChatroom = chatroomRef.child(action.id);
            thisChatroom.on('value', snap => {
            _messages = snap.val();
            this.emit('CHANGE');
          });
          break;
        case 'CREATE_MESSAGE':
          let id = action.id;
          let message = action.message;
          thisChatroom = chatroomRef.child(id);
          thisChatroom.push(message);
          this.emit('CHANGE');
          break;
        case 'GET_ROOMS':
          existingRoomsRef.on('value', snap => {
            var randomObj = snap.val();
            var arrObjects = [];
            for(let key in randomObj) {
              arrObjects.push(randomObj[key]);
            }
            _chatrooms = arrObjects;
            this.emit('CHANGE');
          })
          break;
        case 'CREATE_ROOM':
          let random = existingRoomsRef;
          random.on('value', function(snap) {
            var randomObj = snap.val();
            let arrObjects = [];
            for(let key in randomObj) {
              arrObjects.push(randomObj[key]);
            }
            let existingObj = arrObjects.filter(object => {
              return object.name === action.roomName;
            })
            _chatrooms = arrObjects;
            if (!existingObj[0]) {
              let _chatroom = chatroomRef.push('');
              let newKey = _chatroom.key;
              let newRoom = {key: newKey, name: action.roomName, link: action.roomLink, summary: action.roomSummary};
              existingRoomsRef.push(newRoom);
              _newKey = newKey;
              _chatRoom = newRoom;
            }
          })
          break;
        case 'CREATE_CHATROOM_DETAILS':
          _newChatroom = action.obj;
          this.emit('CHANGE');
          break;
        case 'GET_CHATROOM':
          existingRoomsRef.on('value', snap => {
            var randomObj = snap.val();
            var arrObjects = [];
            for(let key in randomObj) {
              arrObjects.push(randomObj[key]);
            }
            _chatrooms = arrObjects;
            _chatRoom = _chatrooms.filter(room => {
              return (room.key === action.id);
            })[0];
            this.emit('CHANGE');
          })
          break;
      }
    })

  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get() {
    return _messages;
  }

  getNewChatroom() {
    return _newChatroom;
  }

  getChatrooms() {
    return _chatrooms;
  }

  getChatroom() {
    return _chatRoom;
  }

  getNewKey() {
    return _newKey;
  }

}

export default new MessageStore();
