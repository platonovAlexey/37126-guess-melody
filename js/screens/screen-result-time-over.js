import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import {defaultState} from '../data/data';

const screenLevelTimeOverTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultTimeOver = getElementFromTemplate(screenLevelTimeOverTemplate);

const replayButton = screenResultTimeOver.querySelector(`.main-replay`);


replayButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(defaultState);
});

export default screenResultTimeOver;
