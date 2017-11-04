import welcomeScreen from './game/screen-welcome/welcome';
import {defaultState, audioArray} from './data/data';
import GameScreen from './game/game';
import ResultScreen from './game/result/result-screen';
import preload from './preload';
import adapter from './data/adapter';
import loader from './loader';

const ControllerSTATE = {
  WELCOME: ``,
  GAME: `game`,
  SCORE: `score`
};

const loadGame = (data) => {
  if (data) {
    data = `{"lives": ${data.substr(0, 1)}, "level":${+data.substr(1, 2)}, "time": ${+data.substr(3, 3)}, "score": ${+data.substr(6)}}`;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultState;
  }
};

const saveGame = (game) => {
  if (game) {
    const stringLevel = game.level.toString().length === 2 ? game.level : `0${game.level}`;
    const stringTime = game.time.toString().length === 3 ? game.time : `${new Array(3 - game.time.toString().length).fill(`0`).join(``)}${game.time}`;
    const stringScore = game.score.toString().length === 2 ? game.score : `0${game.score}`;

    return `${game.lives}${stringLevel}${stringTime}${stringScore}`;
  } else {
    return JSON.stringify(game);
  }
};

export default class Application {
  static init(gameData) {
    Application.routes = {
      [ControllerSTATE.WELCOME]: welcomeScreen,
      [ControllerSTATE.GAME]: new GameScreen(gameData),
      [ControllerSTATE.SCORE]: ``
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerSTATE.WELCOME;
  }

  static changeLevel(game = defaultState) {
    location.hash = `${ControllerSTATE.GAME}?${saveGame(game)}`;
  }

  static gameOver(game) {
    Application.routes[ControllerSTATE.SCORE] = new ResultScreen(game);
    Application.routes[ControllerSTATE.SCORE].init();
    location.hash = `${ControllerSTATE.SCORE}?${saveGame(game)}`;
  }
}

loader.load()
    .then(adapter)
    .then((gameData) => Application.init(gameData))
    .then(() => audioArray.map((item) => preload(item)))
    .then((songPromises) => Promise.all(songPromises))
    .catch(window.console.error);
