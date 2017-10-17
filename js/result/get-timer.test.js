import assert from 'assert';
import {timeMessage, getTimer} from './get-timer';


describe(`Timer`, () => {
  it(`Таймер работает`, () => {
    assert.equal(getTimer(30).tick().data, 29);
    assert.equal(getTimer(40).tick().data, 39);
  });

  it(`Время вышло, если 0`, () => {
    assert.equal(getTimer(0).tick(), timeMessage);
  });

  it(`Уменьшает значение на 1`, () => {
    for (let i = 30; i >= 0; i--) {
      if (i === 0) {
        assert.equal(getTimer(i).tick(), timeMessage);
      } else {
        assert.equal(getTimer(i).tick().data, i - 1);
      }
    }
  });
});
