import {MAX_LIVES, FailResultText} from '../data/data';

const getResult = (statistics, currentResult) => {
  statistics = statistics.slice();
  const result = Object.assign({}, currentResult);
  let resultText = ``;

  if (result.timeLeft <= 0) {
    resultText = FailResultText.TIME_FAIL;
  } else if (result.attempts < 0) {
    resultText = FailResultText.TRY_FAIL;
  } else {
    statistics.push(result.score);
    statistics.sort((left, right) => right - left);
    const amountOfPlayers = statistics.length;
    const position = statistics.lastIndexOf(result.score) + 1;
    const percent = (amountOfPlayers - position) / amountOfPlayers * 100;

    resultText = {
      title: `Вы настоящий меломан!`,
      stat: `За 3 минуты и 25 секунд
    <br>вы набрали ${result.score} баллов
    <br>совершив ${MAX_LIVES - result.lives} ошибки`,
      comparison: `Вы заняли ${position} место из ${amountOfPlayers} игроков. Это лучше чем у ${percent}% игроков`,
      button: `Сыграть ещё раз`
    };
  }

  return resultText;
};

export default getResult;
