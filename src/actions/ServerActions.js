import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveResults(results) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESULTS',
      results
    })
  }
}

export default ServerActions;
