import AppDispatcher from '../AppDispatcher';

const ChatActions = {
  createMessage(id, message) {
    AppDispatcher.dispatch({
      type: 'CREATE_MESSAGE',
      id, message
    })
  },

  createChatroom(roomName, roomLink, roomSummary) {
    AppDispatcher.dispatch({
      type: 'CREATE_ROOM',
      roomName, roomLink, roomSummary
    })
  },

  createChatroomDetails(obj) {
    AppDispatcher.dispatch({
      type: 'CREATE_CHATROOM_DETAILS',
      obj
    })
  },

  setId(id) {
    AppDispatcher.dispatch({
      type: 'GET_ID',
      id
    })
  },

  getMessages(id) {
    AppDispatcher.dispatch({
      type: 'GET_MESSAGES',
      id
    })
  },

  getChatrooms() {
    AppDispatcher.dispatch({
      type: 'GET_ROOMS'
    })
  },

  getChatroom(id) {
    AppDispatcher.dispatch({
      type: 'GET_CHATROOM',
      id
    })
  }

};

export default ChatActions;
