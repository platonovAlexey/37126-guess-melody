import {SERVER_URL} from './data/data';

export default class Loader {
  static load() {
    return fetch(`${SERVER_URL}`).then((response) => response.json());
  }
}
