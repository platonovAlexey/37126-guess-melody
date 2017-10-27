import AbstractView from '../../screens/abstractView';
import getResult from '../../result/get-result';
import {statistics} from '../../data/data';
import logo from '../../screens/common/logo';

export default class ResultScreenView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    const resultText = getResult(statistics, this.game);
    return `<section class="main main--result">

    ${logo()}
    
    <h2 class="title">${resultText.title}</h2>
    <div class="main-stat">${resultText.stat}</div>
    ${resultText.comparison || ``}
    <span role="button" tabindex="0" class="main-replay">${resultText.button}</span>
  </section>`;
  }

  bind() {
    const tryAgainButton = this.element.querySelector(`.main-replay`);

    tryAgainButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      this.onRepeat();
    });
  }

  onRepeat() {

  }
}
