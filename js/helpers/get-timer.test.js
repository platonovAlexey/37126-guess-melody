import assert from 'assert';
import getTimer from './get-timer';

describe(`Таймер`, () => {
  it(`новый таймер с данными`, () => {
    const timer = getTimer(3);
    assert.equal(3, timer.value);
  });
  it(`уменьшение на 1 tick`, () => {
    const timer = getTimer(5);
    timer.tick();
    assert.equal(4, timer.value);
  });
  it(`уменьшение на определённое количество tick`, () => {
    const timer = getTimer(15);
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(10, timer.value);
  });
  it(`при остановке таймера, вернёт false`, () => {
    const timer = getTimer(0);
    assert.equal(-1, timer.tick());
  });
  it(`таймер продолжается, вернёт true`, () => {
    const timer = getTimer(2);
    assert.equal(true, timer.tick());
  });
});
