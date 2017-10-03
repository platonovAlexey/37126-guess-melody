import getElementFromTemplate from '../helpers/getElementFromTemplate';
import renderScreen from '../helpers/show';
import screenWelcome from './screen-welcom';

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultFail = getElementFromTemplate(template);
const replayButton = screenResultFail.querySelector(`.main-replay`);

const onClickReplayButton = () => {
  renderScreen(screenWelcome);
};

replayButton.addEventListener(`click`, onClickReplayButton);

export default screenResultFail;
