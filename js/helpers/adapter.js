const audioArray = [];

const generateAnswersArray = (answers, type) => {
  const answerArray = [];

  for (const answer of answers) {
    if (type === `artist`) {
      answerArray.push({
        imageSRC: answer.image.url,
        nameArtist: answer.title,
        isRight: answer.isCorrect
      });
    } else {
      if (audioArray.indexOf(answer.src) === -1) {
        audioArray.push(answer.src);
      }
      answerArray.push({
        srcAudio: answer.src,
        genre: answer.genre
      });
    }
  }

  return answerArray;
};

export default (data) => {
  const adaptedObject = {};
  const dataObject = {};

  data.forEach((item, i) => {
    dataObject[`state-${i + 1}`] = {
      type: data[i].type,
      question: data[i].question,
      answers: generateAnswersArray(data[i].answers, data[i].type)
    };

    if (data[i].type === `artist`) {
      if (audioArray.indexOf(data[i].src) === -1) {
        audioArray.push(data[i].src);
      }

      dataObject[`state-${i + 1}`].srcAudio = data[i].src;
    } else {
      dataObject[`state-${i + 1}`].genre = data[i].genre;
    }
  });

  adaptedObject.audio = audioArray;
  adaptedObject.data = dataObject;

  return adaptedObject;
};
