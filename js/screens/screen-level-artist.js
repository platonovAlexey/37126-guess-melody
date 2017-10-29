import getElementFromTemplate from '../helpers/get-element-from-template';
import countPoint from '../result/count-points';
import {levels, setNextLevel, setLives, TIME_ANSWER} from '../data/data.js';
import renderScreen from '../helpers/render-screen';
import getTimer from './module-timer';


const answerTemplate = (answers) => `${[...answers].map((answer, i) => `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="${answer.isRight}"/>
            <label class="main-answer" for="answer-${i + 1}">
              <img class="main-answer-preview" src="${answer.imageSRC}"
                   alt="${answer.nameArtist}" width="134" height="134">
              ${answer.nameArtist}
            </label>
          </div>`).join(``)}`;

const screenLevelArtistTemplate = (screen) => {
  const temp = `<section class="main main--level main--level-artist">

    ${getTimer(screen)}
    
    <div class="main-wrap">
      <h2 class="title main-title">${levels[`state-` + screen.level].question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levels[`state-` + screen.level].srcAudio}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
       ${answerTemplate(levels[`state-` + screen.level].answers)}
      </form>
    </div>
  </section>`;

  const screenLevelArtist = getElementFromTemplate(temp);
  const answerListRadioButtons = screenLevelArtist.querySelectorAll(`.main-answer-r`);
  for (const item of answerListRadioButtons) {
    const statsArray = [];
    const screenStack = [];
    item.addEventListener(`change`, (event) => {
      event.preventDefault();
      if (item.checked) {
        switch (item.value) {
          case `true`: {
            statsArray.push(TIME_ANSWER);
            screenStack.push(screen);
            screen = setNextLevel(screen);
            break;
          }
          case `false`: {
            if (screen.lives <= 0 || screen.time <= 0) {
              screen.level = `fail`;
              screen.score = countPoint(statsArray, screen.lives);
            } else {
              screen = setLives(screen, screen.lives - 1);
            }
          }
        }

        renderScreen(screen);
      }
    });
  }

  return screenLevelArtist;
};

export default screenLevelArtistTemplate;
