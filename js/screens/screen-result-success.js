import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import {makeState} from '../data/data';
import logo from './common/logo';

const screenLevelSuccessTemplate = `<section class="main main--result">
    ${logo()}
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const screenResultSuccess = getElementFromTemplate(screenLevelSuccessTemplate);
const replayButton = screenResultSuccess.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  renderScreen(makeState());
});

export default screenResultSuccess;
