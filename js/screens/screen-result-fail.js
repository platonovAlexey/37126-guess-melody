import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import {defaultState} from '../data/data';

const screenLevelFailTemplate = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultFail = getElementFromTemplate(screenLevelFailTemplate);
const replayButton = screenResultFail.querySelector(`.main-replay`);


replayButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(defaultState);
});

export default screenResultFail;
