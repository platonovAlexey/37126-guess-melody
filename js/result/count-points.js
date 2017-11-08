import {MAX_LIVES, AnswersScore} from '../data/data';

const allTime = (30 * 1000);
const numberAnswers = 10;

const countPoints = (answersArray, lives) => {
  const answers = answersArray.slice();
  let score = 0;

  if (answers.length === numberAnswers) {
    for (const answer of answers) {
      score += (answer <= allTime) ? AnswersScore.ANSWER_FAST : AnswersScore.ANSWER_SLOW;
    }

    if (lives >= 0 && lives < MAX_LIVES) {
      score -= (MAX_LIVES - lives) * AnswersScore.ANSWER_DIE;
    }

    if (lives < 0) {
      score = AnswersScore.ANSWER_FAIL;
    }
  } else {
    score = AnswersScore.ANSWER_FAIL;
  }

  return score;
};

export default countPoints;
