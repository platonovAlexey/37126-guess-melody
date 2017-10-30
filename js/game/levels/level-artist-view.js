import AbstractView from '../../screens/abstractView';
import TimerView from '../module-timer/timer-view';
import countPoints from '../../result/count-points';
import {levels, getLevel, setNextLevel, Result} from '../../data/data';

const answerNode = (answers) => `${[...answers].map((answer, i) => `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
            <label class="main-answer" for="answer-${i + 1}">
              <img class="main-answer-preview" src="${answer.imageSRC}"
                   alt="${answer.nameArtist}" width="134" height="134">
              ${answer.nameArtist}
            </label>
          </div>`).join(``)}`;

export default class LevelArtistView extends AbstractView {
  constructor(game, level) {
    super();
    this.level = level;
    this.game = game;
  }

  get template() {
    const header = new TimerView(this.game);
    return `<section class="main main--level main--level-artist">

    ${header.template}

    <div class="main-wrap">
      <h2 class="title main-title">${levels[`state-` + this.level].question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levels[`state-` + this.level].srcAudio}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
       ${answerNode(levels[`state-` + this.level].answers)}
      </form>
    </div>
  </section>`;
  }

  bind() {
    const playButton = this.element.querySelector(`.player-control`);
    const audioTag = this.element.querySelector(`audio`);

    playButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      if (playButton.classList.contains(`player-control--pause`)) {
        playButton.classList.remove(`player-control--pause`);
        playButton.classList.add(`player-control--play`);
        audioTag.pause();
      } else {
        playButton.classList.remove(`player-control--play`);
        playButton.classList.add(`player-control--pause`);
        audioTag.play();
      }
    });

    const answerListRadioButtons = this.element.querySelectorAll(`.main-answer-r`);
    const answers = levels[`state-` + this.game.level].answers;

    const rightAnswerIndex = answers.findIndex((elem, i) => {
      if (!elem.isRight) {
        return false;
      }

      return i;
    });


    [...answerListRadioButtons].forEach((item, i) => {
      item.addEventListener(`change`, (e) => {
        e.preventDefault();
        if (item.checked) {
          if (i === rightAnswerIndex) {
            this.onAnswer(getLevel(setNextLevel(this.game)) ? Result.NEXT : Result.WIN);
          } else {
            let result = Result.DIE;
            if (this.game.lives <= 0 || this.game.time <= 0) {
              this.game.score = countPoints(this.game.statsArray, this.game.lives);
              result = Result.FAIL;
            }
            this.onAnswer(result);
          }
        }
      });
    });
  }

  static onAnswer(answer) {
    return answer;
  }

}
