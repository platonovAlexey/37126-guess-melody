import {audioArray} from './data';

const generateAnswersArray = (answers, type) => {
  const answerArray = [];

  answers.forEach((item, i) => {

    if (type === `artist`) {
      answerArray[i] = {
        imageSRC: answers[i].image.url,
        nameArtist: answers[i].title,
        isRight: answers[i].isCorrect
      };
    } else {
      if (audioArray.indexOf(answers[i].src) === -1) {
        audioArray.push(answers[i].src);
      }
      answerArray[i] = {
        srcAudio: answers[i].src,
        genre: answers[i].genre
      };
    }
  });

  return answerArray;
};

export default (data) => {
  const adaptedObject = {};

  data.forEach((item, i) => {
    adaptedObject[`state-${i + 1}`] = {
      type: data[i].type,
      question: data[i].question,
      answers: generateAnswersArray(data[i].answers, data[i].type)
    };

    if (data[i].type === `artist`) {
      if (audioArray.indexOf(data[i].src) === -1) {
        audioArray.push(data[i].src);
      }

      adaptedObject[`state-${i + 1}`].srcAudio = data[i].src;
    } else {
      adaptedObject[`state-${i + 1}`].genre = data[i].genre;
    }
  });

  return adaptedObject;
};
