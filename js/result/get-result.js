const getResult = (statistics, result) => {
  if (result.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (result.attempts === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  statistics.slice(result.score);
  statistics.sort((left, right) => right - left);
  const amountOfPlayers = statistics.length;
  const position = statistics.lastIndexOf(result.score) + 1;
  const percent = (amountOfPlayers - position) / amountOfPlayers * 100;

  return `Вы заняли ${position} место из ${amountOfPlayers} игроков. Это лучше чем у ${percent}% игроков`;
};

export default getResult;
