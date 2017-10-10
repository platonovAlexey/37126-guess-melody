import assert from "assert";
import countPoints from './count-points';

describe(`Function countPoints`, () => {
  it(`Игрок ответил меньше 10 вопросов, должно вернуться -1`, () => {
    let answers = [
      {answer: true, time: 22000},
      {answer: true, time: 26000},
      {answer: true, time: 29000},
      {answer: true, time: 20000},
      {answer: true, time: 11000},
      {answer: true, time: 2000}
    ];

    assert.equal(countPoints(answers, 0), -1);

    answers = [
      {answer: true, time: 22000},
      {answer: true, time: 26000},
      {answer: true, time: 30000},
      {answer: true, time: 20000},
      {answer: true, time: 11000},
      {answer: true, time: 2000},
      {answer: true, time: 7000},
      {answer: true, time: 44000},
      {answer: true, time: 8000}
    ];

    assert.equal(countPoints(answers, 3), -1);

  });

  it(`Игрок быстро ответил на все вопросы без ошибок, должно вернуться 20`, () => {
    let answers = [
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000}
    ];

    assert.strictEqual(countPoints(answers, 3), 20);

    answers = [
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000},
      {answer: true, time: 13000}
    ];

    assert.strictEqual(countPoints(answers, 1), 20);
  });

  it(`Игрок медленно ответил на все вопросы без ошибок, должно вернуть 10`, () => {
    let answers = [
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000},
      {answer: true, time: 66000}
    ];

    assert.strictEqual(countPoints(answers, 3), 10);
  });
});
