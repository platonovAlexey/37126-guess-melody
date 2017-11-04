import {MAX_LIVES, FailResultText, getDeclension} from '../data/data';
import getTime from '../helpers/get-time';

const getResult = (statistics, currentResult) => {
  statistics = statistics.slice();
  const result = Object.assign({}, currentResult);
  const fails = MAX_LIVES - result.lives;
  let resultText = ``;
  let placeInStats = 0;
  let percent = 0;
  let place = 0;
  let placeTextEnd = `о`;
  let playersTextEnd = `ов`;

  if (result.score < 0) {

    if (result.lives <= 0) {
      resultText = FailResultText.TRY_FAIL;
    }
  } else {
    statistics.push(result.score);

    statistics.sort((left, right) => right - left);

    statistics.reduce((prev, cur, index) => {
      if (cur === result.score) {
        placeInStats = index;
      }
    });

    percent = (placeInStats / statistics.length).toFixed(1) * 100;

    if (statistics.length === 1) {
      percent = 100;
      playersTextEnd = `а`;
    }

    place = statistics.length - placeInStats;

    if (place === 3 || (place % 10 === 3 && place !== 13)) {
      placeTextEnd = `ь`;
    }

    if (result.time <= 0) {
      resultText = FailResultText.TIME_FAIL;
    } else {
      const minutes = getTime(result.time, `min`);
      const seconds = getTime(result.time, `sec`);
      const minutesWord = getDeclension(minutes, `минуту`, `минуты`, `минут`);
      const secondsWord = getDeclension(seconds, `секунду`, `секунды`, `секунд`);
      const scoreWord = getDeclension(result.score, `балл`, `балла`, `баллов`);
      const failsWord = getDeclension(fails, `ошибку`, `ошибки`, `ошибок`);

      resultText = {
        title: `Вы настоящий меломан!`,
        stat: `За ${minutes} ${minutesWord} минуты и ${seconds} ${secondsWord}
      <br>вы набрали ${result.score} ${scoreWord}
      <br>совершив ${fails} ${failsWord}`,
        comparison: `Вы заняли ${place}-${placeTextEnd}е место из ${statistics.length} игрок${playersTextEnd}. Это лучше чем у ${percent}% игроков`,
        button: `Сыграть ещё раз`
      };
    }
  }

  return resultText;
};

export default getResult;
