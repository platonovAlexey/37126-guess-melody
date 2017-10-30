import getElementFromTemplate from '../helpers/get-element-from-template';
import countPoint from '../result/count-points';
import {levels, setNextLevel, setLives, TIME_ANSWER} from '../data/data';
import renderScreen from '../helpers/render-screen';
import getTimer from './module-timer';

const answerTemplate = (answers) => `${[...answers].map((answer) => `<div class="genre-answer">
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

const screenLevelGenderTemplate = (screen) => {
  const temp = `<section class="main main--level main--level-genre">

    ${getTimer(screen)}
    
    <div class="main-wrap">
      <h2 class="title">${levels[`state-` + screen.level].question}</h2>
      <form class="genre">
        ${answerTemplate(levels[`state-` + screen.level].answers)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(temp);
  const sendButton = screenLevelGenre.querySelector(`.genre-answer-send`);
  const checkboxList = screenLevelGenre.querySelectorAll(`input[name=answer]`);
  const answersContainer = screenLevelGenre.querySelector(`.genre`);
  sendButton.disabled = true;

  const rightAnswer = levels[`state-` + screen.level].genre;
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
    for (const checkbox of checkboxList) {
      if (checkbox.checked) {
        answersArr.push(checkbox);
      }
    }

    sendButton.disabled = !(answersArr.length > 0);
    arr = answersArr;

  });

  sendButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    if (arr.length > 0) {
      let count = 0;
      arr.forEach((item) => {
        if (item.value.toLowerCase() === rightAnswer.toLowerCase()) {
          count++;
        }
        return count;
      });

      if (countRightAnswers === count) {
        screen.statsArray.push(TIME_ANSWER);
        screen = setNextLevel(screen);
      } else {
        if (screen.lives <= 0 || screen.time <= 0) {
          screen.level = `fail`;
          screen.score = countPoint(screen.statsArray, screen.lives);
        } else {
          screen = setLives(screen, screen.lives - 1);
        }
      }

      renderScreen(screen);
    }
  });

  return screenLevelGenre;
};


export default screenLevelGenderTemplate;
