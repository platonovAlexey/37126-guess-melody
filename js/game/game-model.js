import {levels, setLives, setTime, setNextLevel} from '../data/data';
import countPoints from '../result/count-points';
import getTimer from '../helpers/get-timer';

export default class GameModel {
  constructor(data = levels) {
    this.data = data;
  }

  update(newGame) {
    this.game = newGame;
    return this.game;
  }

  setTimer() {
    this.timer = getTimer(this.game.time, this.game);
    return this.timer;
  }

  setGameTime() {
    this.update(setTime(this.game, this.timer.getCurrentTimer()));
  }

  getAnswerTime() {
    this.answerTime = this.timer.getCurrentTimer();
    return this.answerTime;
  }

  setStat(answer) {
    this.game.statsArray.push(answer);
  }

  die() {
    this.update(setLives(this.game, this.game.lives - 1));
  }

  nextLevel() {
    this.update(setNextLevel(this.game));
  }

  getGamePoints() {
    this.game.score = countPoints(this.game.statsArray, this.game.lives);
  }
}
