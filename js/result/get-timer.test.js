import assert from 'assert';
import getTimer from './get-timer';


describe(`Timer`, () => {
  it(`Таймер работает`, () => {
    let timer = getTimer(30);
    let timerTick = timer.tick();

    assert.equal(timerTick, 29);
  });

  it(`Таймер работает`, () => {
    let timer = getTimer(20);
    let timerTick = timer.tick();

    assert.equal(timerTick, 19);
  });

  it(`Таймер время закончилось`, () => {
    let timer = getTimer(0);

    assert.equal(timer, -1);
  });
});
