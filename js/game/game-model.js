import {levels, setLives, setTime, setNextLevel, stats} from '../data/data';
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

  setTimer(time) {
    this.timer = getTimer(time, this.game);
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
    stats.push(answer);
  }

  die() {
    this.update(setLives(this.game, this.game.lives - 1));
  }

  nextLevel() {
    this.update(setNextLevel(this.game));
  }

  getGamePoints() {
    this.game.score = countPoints(stats, this.game.lives);
  }
}
