import renderScreen from '../helpers/render-screen';
import getElementFromTemplate from '../helpers/get-element-from-template';
import logo from './common/logo';
import {defaultState, setNextLevel} from '../data/data';

const template = `<section class="main main--welcome">
    ${logo()}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const screenWelcome = getElementFromTemplate(template);
const playButton = screenWelcome.querySelector(`.main-play`);

playButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  const startGame = setNextLevel(defaultState);
  renderScreen(startGame);
});

export default screenWelcome;
