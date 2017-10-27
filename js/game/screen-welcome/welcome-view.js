import AbstractView from '../../screens/abstractView';
import logo from '../../screens/common/logo';

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
    ${logo()}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`.trim();
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      this.onClick();
    });
  }

  onClick() {

  }
}

