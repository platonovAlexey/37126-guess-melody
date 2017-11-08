import AbstractView from '../../abstractView';
import {MAX_LIVES} from '../../data/data';
import getTime from '../../helpers/get-time';

export default class TimerView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${getTime(this.game.time, `min`)}</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">${getTime(this.game.time, `sec`)}</span>
      </div>
    </svg>
    <div class="main-mistakes">
    
      ${new Array(MAX_LIVES - this.game.lives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>`;
  }
}
