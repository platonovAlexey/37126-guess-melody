import getTime from './get-time';
import getRadius from './get-radius';
import {GAME_TIME} from '../data/data';

export const updateTime = (time) => {
  const minutesValue = document.querySelector(`.timer-value-mins`);
  const secondsValue = document.querySelector(`.timer-value-secs`);
  const timerValue = document.querySelector(`.timer-value`);
  const timeILine = document.querySelector(`.timer-line`);

  if (minutesValue && secondsValue) {
    minutesValue.innerHTML = ``;
    secondsValue.innerHTML = ``;

    minutesValue.innerHTML = getTime(time, `min`);
    secondsValue.innerHTML = getTime(time, `sec`);
  }

  if (time <= 30 && timerValue) {
    timerValue.classList.add(`timer-value--finished`);
  }

  if (timeILine) {
    const ratio = time / GAME_TIME;
    const radius = +timeILine.getAttribute(`r`);
    const parametersStroke = getRadius(ratio, radius);

    timeILine.setAttribute(`stroke-dasharray`, `${parametersStroke.stroke} ${parametersStroke.offset}`);
  }
};
