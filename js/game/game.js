import LevelArtistView from './levels/level-artist-view';
import LevelGenreView from './levels/level-gender-view';
import resultScreen from './result/result-screen';
import showWelcome from './screen-welcome/welcome';
import countPoints from '../result/count-points';
import setScreen from '../helpers/set-screen';
import getTimer from '../helpers/get-timer';
import gameOver from './game-over/game-over';
import {levels, makeState, setLives, setNextLevel, setTime, Result} from '../data/data';

const changeLevel = (game) => {
  let level = new LevelGenreView(game, game.level);

  if (levels[`state-` + game.level].type === `artist`) {
    level = new LevelArtistView(game, game.level);
  }

  const timer = getTimer(game.time, game);
  timer.start();
  const startLevelTime = timer.getCurrentTimer();

  gameOver();

  level.onAnswer = (answer) => {
    timer.stop();

    switch (answer) {
      case Result.DIE: {
        game = setTime(game, timer.getCurrentTimer());
        setScreen(changeLevel(setLives(game, game.lives - 1)));
        break;
      }
      case Result.FAIL: {
        game = setTime(game, 0);
        const failScreen = resultScreen(game);
        failScreen.onRepeat = () => {
          game.statsArray.length = 0;
          setScreen(showWelcome());
        };
        setScreen(failScreen);
        break;
      }
      case Result.WIN: {
        game = setTime(game, timer.getCurrentTimer());

        const levelTime = startLevelTime - game.time;
        game.statsArray.push(levelTime);

        const winScreen = resultScreen(game);
        winScreen.onRepeat = () => {
          game.statsArray.length = 0;
          setScreen(showWelcome());
        };
        game.points = countPoints(game.statsArray, game.lives);
        setScreen(winScreen);
        break;
      }
      case Result.NEXT: {
        game = setTime(game, timer.getCurrentTimer());

        const levelTime = startLevelTime - game.time;
        game.statsArray.push(levelTime);

        setScreen(changeLevel(setNextLevel(game)));
        break;
      }
      default: {
        setScreen(changeLevel(game));
      }
    }
  };
  return level;
};

export default () => changeLevel(makeState());
