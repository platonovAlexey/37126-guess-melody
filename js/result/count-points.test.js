import assert from 'assert';
import countPoints from './count-points';

describe(`countPoints function`, () => {
  describe(`Победил`, () => {
    it(`Возвращает 20 points`, () => {
      assert.equal(20, countPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3));
    });
    it(`Возвращает 18`, () => {
      assert.equal(18, countPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 2));
    });
    it(`Возвращает 16`, () => {
      assert.equal(16, countPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 1));
    });
    it(`Возвращает 14`, () => {
      assert.equal(14, countPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0));
    });
    it(`Возвращает 20`, () => {
      assert.equal(20, countPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3));
    });
    it(`Возвращает 20`, () => {
      assert.equal(20, countPoints([20, 32, 32, 32, 32, 32, 32, 32, 32, 32], 3));
    });
    it(`Возвращает 18`, () => {
      assert.equal(18, countPoints([8, 32, 32, 32, 32, 32, 32, 32, 32, 32], 2));
    });
    it(`Возвращает 16`, () => {
      assert.equal(16, countPoints([16, 32, 32, 32, 32, 32, 32, 32, 32, 32], 1));
    });
    it(`Возвращает 14`, () => {
      assert.equal(14, countPoints([14, 32, 32, 32, 32, 32, 32, 32, 32, 32], 0));
    });
  });

  describe(`Loser scenarios`, () => {
    it(`Возвращает -1`, () => {
      assert.equal(-1, countPoints([1, 2, 3, 4, 5, 6, 7, 8, 9], -1));
    });
    it(`Возвращает -1`, () => {
      assert.equal(-1, countPoints([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
    });
    it(`Возвращает -1`, () => {
      assert.equal(-1, countPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1));
    });
  });
});
