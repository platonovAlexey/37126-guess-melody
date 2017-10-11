import assert from 'assert';
import getResult from './get-result';

describe(`Function getResult`, () => {
  it(`Игрок проиграл и у него закончилось время`, () => {
    let statistics = [1, 2, 3, 4, 5];
    let result = {
      score: 10,
      attempts: 4,
      timeLeft: 0
    };
    assert.equal(getResult(statistics, result), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`Игрок проиграл и у него закончились попытки`, () => {
    let statistics = [1, 2, 3, 4, 5];
    let result = {
      score: 10,
      attempts: 0,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`Игрок выиграл`, () => {

    let statistics = [5, 4, 3, 1, 1];
    let result = {
      score: 4,
      attempts: 3,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result), `Вы заняли 2 место из 5 игроков. Это лучше чем у 60% игроков`);

    statistics = [5, 4, 3, 1];
    result = {
      score: 3,
      attempts: 3,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result), `Вы заняли 3 место из 4 игроков. Это лучше чем у 25% игроков`);

    statistics = [4, 4, 3, 1, 1];
    result = {
      score: 3,
      attempts: 1,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result), `Вы заняли 3 место из 5 игроков. Это лучше чем у 40% игроков`);

    statistics = [5, 5, 3, 2, 1];
    result = {
      score: 1,
      attempts: 2,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result), `Вы заняли 5 место из 5 игроков. Это лучше чем у 0% игроков`);
  });
});
