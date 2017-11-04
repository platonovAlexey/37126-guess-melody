import ResultScreenView from './result-screen-view';
import setScreen from '../../helpers/set-screen';
import App from '../../application';
import {stats, statistics} from '../../data/data';
import countPoints from '../../result/count-points';
import loader from '../../loader';

class ResultScreen {
  constructor(game) {
    this.game = game;
    this.view = new ResultScreenView(game);
  }

  init() {
    if (this.game.score >= 0 && this.game.time > 0 && stats.length === 10) {
      loader.loadResult().then((score) => {
        for (const userStats of score) {
          if (!Array.isArray(userStats)) {
            statistics.push(countPoints(userStats.answers, userStats.lives));
          }
        }

        this.view = new ResultScreenView(this.game, statistics);

        return this.view;
      });
    }

    this.view.onRepeat = () => {
      stats.length = 0;
      App.showWelcome();
    };

    setScreen(this.view);
  }
}

export default ResultScreen;
