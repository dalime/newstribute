import AppDispatcher from '../AppDispatcher';

const ChatActions = {
  // TO CHAT A MESSAGE
  createMessage(id, message) {
    AppDispatcher.dispatch({
      type: 'CREATE_MESSAGE',
      id, message
    })
  },

  // TO CREATE A NEW CHATROOM
  createChatroom(roomName, roomLink, roomSummary) {
    AppDispatcher.dispatch({
      type: 'CREATE_ROOM',
      roomName, roomLink, roomSummary
    })
  },

  // WHEN A NEW CHATROOM IS CREATED
  createChatroomDetails(obj) {
    AppDispatcher.dispatch({
      type: 'CREATE_CHATROOM_DETAILS',
      obj
    })
  },

  // TO GET ID
  setId(id) {
    AppDispatcher.dispatch({
      type: 'GET_ID',
      id
    })
  },

  // TO GET ALL MESSAGES FROM CHATROOM
  getMessages(id) {
    AppDispatcher.dispatch({
      type: 'GET_MESSAGES',
      id
    })
  },

  // TO GET ALL AVAILABLE CHATROOMS
  getChatrooms() {
    AppDispatcher.dispatch({
      type: 'GET_ROOMS'
    })
  },

  // TO RENDER SPECIFIC CHATROOM BASED ON ID
  getChatroom(id) {
    AppDispatcher.dispatch({
      type: 'GET_CHATROOM',
      id
    })
  }

};

export default ChatActions;
