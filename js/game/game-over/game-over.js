import {Result} from '../../data/data';
import changeLevel from '../game';

const setGameOver = ({detail: gameDetail}) => {
  const level = changeLevel(gameDetail);
  level.onAnswer(Result.FAIL);
};

export default () => {
  document.removeEventListener(`gameover`, setGameOver);
  document.addEventListener(`gameover`, setGameOver);
};
