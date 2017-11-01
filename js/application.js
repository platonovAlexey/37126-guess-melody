import welcomeScreen from './game/screen-welcome/welcome';
import {makeState} from './data/data';
import GameScreen from './game/game';
import ResultScreen from './game/result/result-screen';

const ControllerSTATE = {
  WELCOME: ``,
  GAME: `game`,
  SCORE: `score`
};

const routes = {
  [ControllerSTATE.WELCOME]: welcomeScreen,
  [ControllerSTATE.GAME]: ``,
  [ControllerSTATE.SCORE]: ``
};

const loadGame = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return makeState();
  }
};

const saveGame = (game) => {
  return JSON.stringify(game);
};

export default class Application {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerSTATE.WELCOME;
  }

  static startGame(game = makeState()) {
    routes[ControllerSTATE.GAME] = new GameScreen();
    location.hash = `${ControllerSTATE.GAME}?${saveGame(game)}`;
  }

  static gameOver(game) {
    routes[ControllerSTATE.SCORE] = new ResultScreen(game);
    location.hash = `${ControllerSTATE.SCORE}?${saveGame(game)}`;
  }
}

Application.init();
