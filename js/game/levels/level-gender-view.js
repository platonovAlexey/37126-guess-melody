import AbstractView from '../../screens/abstractView';
import TimerView from '../module-timer/timer-view';
import countPoints from '../../result/count-points';
import {getLevel, setNextLevel, Result, stats} from '../../data/data';

const answerNode = (answers) => `${[...answers].map((answer) => `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${answer.srcAudio}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="${answer.genre}" id="${answer.genre}">
          <label class="genre-answer-check" for="${answer.genre}"></label>
        </div>`).join(``)}`;

export default class LevelGenreView extends AbstractView {
  constructor(game, level, model) {
    super();
    this.level = level;
    this.game = game;
    this.model = model;
  }

  get template() {
    const header = new TimerView(this.game);
    return `<section class="main main--level main--level-genre">

    ${header.template}

    <div class="main-wrap">
      <h2 class="title">${this.model.data[`state-` + this.level].question}</h2>
      <form class="genre">
      
        ${answerNode(this.model.data[`state-` + this.level].answers)}

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
  }

  bind() {
    const playButtons = this.element.querySelectorAll(`.player-control`);
    const audioTag = this.element.querySelectorAll(`audio`);

    [...playButtons].forEach((item, i, arr) => {
      item.addEventListener(`click`, (e) => {
        e.preventDefault();

        if (item.classList.contains(`player-control--pause`)) {
          item.classList.remove(`player-control--pause`);
          item.classList.add(`player-control--play`);
          audioTag[i].pause();
        } else {
          item.classList.remove(`player-control--play`);
          item.classList.add(`player-control--pause`);
          [...audioTag].forEach((el, index) => {
            if (!el.paused) {
              el.pause();
              arr[index].classList.remove(`player-control--pause`);
              arr[index].classList.add(`player-control--play`);
            }
          });

          audioTag[i].play();
        }
      });
    });


    const checkboxList = this.element.querySelectorAll(`input[name=answer]`);
    const sendButton = this.element.querySelector(`.genre-answer-send`);
    const answersContainer = this.element.querySelector(`.genre`);

    sendButton.disabled = true;
    const rightAnswer = this.model.data[`state-` + this.level].genre;
    let countRightAnswers = 0;
    let arr = [];

    [...checkboxList].forEach((item) => {
      if (item.value.toLowerCase() === rightAnswer.toLowerCase()) {
        countRightAnswers++;
      }
      return countRightAnswers;
    });

    answersContainer.addEventListener(`change`, () => {
      const answersArr = [];
      for (const item of checkboxList) {
        if (item.checked) {
          answersArr.push(item);
        }
      }

      sendButton.disabled = !(answersArr.length > 0);
      arr = answersArr;

    });

    sendButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      if (arr.length > 0) {
        let count = 0;
        arr.forEach((item) => {
          if (item.value.toLowerCase() === rightAnswer.toLowerCase()) {
            count++;
          }
          return count;
        });

        if (countRightAnswers === count) {
          this.onAnswer(getLevel(setNextLevel(this.game), this.model.data) ? Result.NEXT : Result.WIN);
        } else {
          let result = Result.DIE;
          if (this.game.lives <= 0 || this.game.time <= 0) {
            this.game.score = countPoints(stats, this.game.lives);
            result = Result.FAIL;
          }
          this.onAnswer(result);
        }
      }
    });
  }

  static onAnswer(answer) {
    return answer;
  }
}
