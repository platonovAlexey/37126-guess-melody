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
    assert.equal(getResult(statistics, result).stat, `Время вышло!<br> Вы не успели отгадать все мелодии`);
  });

  it(`Игрок проиграл и у него закончились попытки`, () => {
    let statistics = [1, 2, 3, 4, 5];
    let result = {
      score: -1,
      attempts: -1
    };
    assert.equal(getResult(statistics, result).stat, `У вас закончились все попытки.<br> Ничего, повезёт в следующий раз!`);
  });

  it(`Игрок выиграл`, () => {

    let statistics = [5, 8, 2, 10, 15, 21, 33];
    let result = {
      score: 8,
      attempts: 3,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result).comparison, `Вы заняли 6 место из 8 игроков. Это лучше чем у 25% игроков`);

    statistics = [5, 4, 3, 1];
    result = {
      score: 3,
      attempts: 3,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result).comparison, `Вы заняли 4 место из 5 игроков. Это лучше чем у 20% игроков`);

    statistics = [10, 4, 18, 11, 16, 33, 55, 30, 1];
    result = {
      score: 4,
      attempts: 4,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result).comparison, `Вы заняли 9 место из 10 игроков. Это лучше чем у 10% игроков`);

    statistics = [5, 5, 3, 2, 1];
    result = {
      score: 1,
      attempts: 2,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result).comparison, `Вы заняли 6 место из 6 игроков. Это лучше чем у 0% игроков`);

    statistics = [5, 5, 5];
    result = {
      score: 4,
      attempts: 4,
      timeLeft: 1000
    };
    assert.equal(getResult(statistics, result).comparison, `Вы заняли 4 место из 4 игроков. Это лучше чем у 0% игроков`);
  });
});
