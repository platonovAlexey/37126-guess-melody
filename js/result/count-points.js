const allTime = 30000;
const numberAnswers = 10;

const countPoints = (answers, amountOfNotes) => {
  if (answers.length < numberAnswers || amountOfNotes < 0) {
    return -1;
  }

  return answers.reduce((sum, current) => {
    if (current.answer && current.time < allTime) {
      return sum + 2;
    } else if (current.answer) {
      return sum + 1;
    } else {
      return sum - 2;
    }
  }, 0);

};

export default countPoints;
