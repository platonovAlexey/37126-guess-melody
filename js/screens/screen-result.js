import getElementFromTemplate from '../helpers/get-element-from-template';
import renderScreen from '../helpers/render-screen';
import getResult from '../result/get-result';
import {defaultState, statistics} from '../data/data';

const resultTemplate = (screen) => {
  const resultText = getResult(statistics, screen);
  const temp = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${resultText.title}</h2>
    <div class="main-stat">${resultText.stat}</div>
    ${resultText.comparison || ``}
    <span role="button" tabindex="0" class="main-replay">${resultText.button}</span>
  </section>`;

  const resultScreen = getElementFromTemplate(temp);
  const tryAgainButton = resultScreen.querySelector(`.main-replay`);
  tryAgainButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    renderScreen(defaultState);
  });

  return resultScreen;
};

export default resultTemplate;
