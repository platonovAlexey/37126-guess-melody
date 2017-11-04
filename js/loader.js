import {SERVER_URL, DEFAULT_USER} from './data/data';

export default class Loader {
  static load() {
    return fetch(`${SERVER_URL}/questions`).then((response) => response.json());
  }

  static loadResult(userName = DEFAULT_USER) {
    return fetch(`${SERVER_URL}/stats/${userName}`).then((response) => response.json());
  }

  static saveResult(stats, userName = DEFAULT_USER) {
    const requestSettings = {
      body: JSON.stringify(stats),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${userName}`, requestSettings);
  }
}

