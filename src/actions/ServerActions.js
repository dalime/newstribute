import AppDispatcher from '../AppDispatcher';

// TO RECEIVE RESULTS OF CHATROOMS
const ServerActions = {
  receiveResults(results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESULTS',
      results
    })
  }
}

export default ServerActions;
