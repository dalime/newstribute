import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  search(query) {
    axios.get(`/api/search/${query}`)
      .then(res => res.data)
      .then(ServerActions.receiveResults)
      .catch(console.error);
  }
}

export default API;
