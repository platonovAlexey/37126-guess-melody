import App from '../application';
import LevelArtistView from './levels/level-artist-view';
import LevelGenreView from './levels/level-gender-view';
import GameModel from './game-model';
import setScreen from '../helpers/set-screen';
import gameOver from './game-over/game-over';
import {levels, defaultState, Result} from '../data/data';

export default class GameScreen {
  constructor(data = levels) {
    this.model = new GameModel(data);
  }

  init(game = defaultState) {
    this.model.update(game);
    this.model.setTimer(game.time);
    this.model.timer.start();
    this.view = this.getLevelType(this.model.game);
    this.view.onAnswer = (answer) => this.onAnswer(answer);
    gameOver();

    setScreen(this.view);
  }

  getLevelType(game) {
    let level = new LevelGenreView(game, game.level);

    if (levels[`state-` + game.level].type === `artist`) {
      level = new LevelArtistView(game, game.level);
    }

    return level;
  }

  onAnswer(answer) {
    this.model.timer.stop();

    switch (answer) {
      case Result.DIE: {
        this.model.die();
        this.model.setGameTime();
        App.changeLevel(this.model.game);
        break;
      }
      case Result.FAIL: {
        App.gameOver(this.model.game);
        break;
      }
      case Result.WIN: {
        const startLevelTime = this.model.game.time;
        this.model.setGameTime();
        this.model.setStat(startLevelTime - this.model.getAnswerTime());
        this.model.getGamePoints();

        App.gameOver(this.model.game);
        break;
      }
      case Result.NEXT: {
        const startLevelTime = this.model.game.time;
        this.model.setGameTime();
        this.model.setStat(startLevelTime - this.model.getAnswerTime());
        this.model.nextLevel();

        App.changeLevel(this.model.game);
        break;
      }
    }
  }
}
