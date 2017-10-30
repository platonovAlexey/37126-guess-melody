import assert from 'assert';
import getResult from './get-result';

describe(`Function getResult`, () => {
  describe(`Проиграл`, () => {
    it(`Игрок проиграл и у него закончилось время`, () => {
      assert.equal(`Время вышло!<br> Вы не успели отгадать все мелодии`, getResult([], {score: 10, lives: 0, time: 0}).stat);
    });
    it(`Игрок проиграл и у него закончились попытки`, () => {
      assert.equal(`У вас закончились все попытки.<br> Ничего, повезёт в следующий раз!`, getResult([], {score: -1, lives: -1}).stat);
    });
  });
  describe(`Выиграл`, () => {
    it(`Занял первое место`, () => {
      assert.equal(`Вы заняли 5-ое место из 5 игроков. Это лучше чем у 0% игроков`, getResult([18, 2, 14, 3], {score: 20}).comparison);
    });
    it(`Занял второе место`, () => {
      assert.equal(`Вы заняли 4-ое место из 5 игроков. Это лучше чем у 20% игроков`, getResult([20, 2, 14, 3], {score: 18}).comparison);
    });
    it(`Занял третье место`, () => {
      assert.equal(`Вы заняли 3-ье место из 5 игроков. Это лучше чем у 40% игроков`, getResult([20, 2, 18, 3], {score: 14}).comparison);
    });
    it(`Занял четвёртое место`, () => {
      assert.equal(`Вы заняли 2-ое место из 5 игроков. Это лучше чем у 60% игроков`, getResult([20, 2, 18, 10], {score: 5}).comparison);
    });
    it(`Занял пятое место`, () => {
      assert.equal(`Вы заняли 1-ое место из 5 игроков. Это лучше чем у 80% игроков`, getResult([20, 5, 18, 10], {score: 2}).comparison);
    });
    it(`Если игрок один`, () => {
      assert.equal(`Вы заняли 1-ое место из 1 игрока. Это лучше чем у 100% игроков`, getResult([], {points: 2}).comparison);
    });
  });
});
