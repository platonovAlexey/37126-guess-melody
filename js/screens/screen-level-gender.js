import getElementFromTemplate from '../helpers/get-element-from-template';
import getRandomElement from '../helpers/get-random-element';
import renderScreen from '../helpers/show';
import screenResultFail from './screen-result-fail';
import screenResultSuccess from './screen-result-success';
import screenResultTimeOver from './screen-result-time-over';

const template = `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    </div>

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

const screenLevelGenre = getElementFromTemplate(template);
const sendButton = screenLevelGenre.querySelector(`.genre-answer-send`);
const checkboxList = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);
sendButton.disabled = true;

const setStateCheckbox = () => {
  for (let checkbox of checkboxList) {
    checkbox.checked = false;
  }
  toggleSendButton(false);
};

const toggleSendButton = (condition) => {
  if (condition) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};

const validateForm = () => {
  let valid = false;
  for (const checkbox of checkboxList) {
    if (checkbox.checked) {
      valid = true;
      break;
    }
  }
  toggleSendButton(valid);
};

for (let checkbox of checkboxList) {
  checkbox.addEventListener(`change`, validateForm);
}

sendButton.addEventListener(`click`, (event) =>{
  event.preventDefault();
  const screenResult = getRandomElement([screenResultSuccess, screenResultFail, screenResultTimeOver]);
  renderScreen(screenResult);
  setStateCheckbox();
});

export default screenLevelGenre;
