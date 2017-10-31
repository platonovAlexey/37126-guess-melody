import ResultScreenView from './result-screen-view';
import setScreen from '../../helpers/set-screen';
import App from '../../application';

class ResultScreen {
  constructor(game) {
    this.game = game;
    this.view = new ResultScreenView(game);
  }

  init() {
    this.view.onRepeat = () => {
      this.game.statsArray.length = 0;
      App.showWelcome();
    };

    setScreen(this.view);
  }
}

export default ResultScreen;
