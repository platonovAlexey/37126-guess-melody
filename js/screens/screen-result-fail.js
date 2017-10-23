import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import {defaultState} from '../data/data';
import logo from './common/logo';

const screenLevelFailTemplate = `<section class="main main--result">
    ${logo()}
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
