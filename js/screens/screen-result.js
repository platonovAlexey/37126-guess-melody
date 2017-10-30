import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import getResult from '../result/get-result';
import {makeState, statistics} from '../data/data';
import logo from './common/logo';

const resultTemplate = (screen) => {
  const resultTextTemplate = getResult(statistics, screen);
  const temp = `<section class="main main--result">
    ${logo()}
    <h2 class="title">${resultTextTemplate.title}</h2>
    <div class="main-stat">${resultTextTemplate.stat}</div>
    ${resultTextTemplate.comparison || ``}
    <span role="button" tabindex="0" class="main-replay">${resultTextTemplate.button}</span>
  </section>`;

  const resultScreen = getElementFromTemplate(temp);
  const tryAgainButton = resultScreen.querySelector(`.main-replay`);
  tryAgainButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    renderScreen(makeState());
  });

  return resultScreen;
};

export default resultTemplate;
