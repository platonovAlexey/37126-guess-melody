import {MAX_LIVES} from '../data/data';

const allTime = (30 * 1000);
const numberAnswers = 10;

const countPoints = (answersArray, lives) => {
  const answers = answersArray.slice();
  let score = 0;

  if (answers.length === numberAnswers) {
    for (let i = 0; i < answers.length; i++) {
      score += (answers[i] <= allTime) ? 2 : 1;
    }

    if (lives >= 0 && lives < MAX_LIVES) {
      score -= (MAX_LIVES - lives) * 2;
    }

    if (lives < 0) {
      score = -1;
    }
  } else {
    score = -1;
  }

  return score;
};

export default countPoints;
