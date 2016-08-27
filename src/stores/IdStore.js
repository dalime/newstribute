import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _id = "";

class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GET_ID':
          _id = action.id;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getId() {
    return _id;
  }
}

export default new SearchStore();
