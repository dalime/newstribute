import AppDispatcher from '../AppDispatcher';

const ChatActions = {
  createMessage(id, message) {
    AppDispatcher.dispatch({
      type: 'CREATE_MESSAGE',
      id, message
    })
  },

  createChatroom(roomName) {
    AppDispatcher.dispatch({
      type: 'CREATE_ROOM',
      roomName
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
  }

};

export default ChatActions;
