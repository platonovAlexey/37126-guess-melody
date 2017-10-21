import {levels, statsArray} from '../data/data';
import resultScreen from '../screens/screen-result';
import screenWelcome from '../screens/screen-welcom';
import screenLevelArtist from '../screens/screen-level-artist';
import screenLevelGenre from '../screens/screen-level-gender';
import countPoint from '../result/count-points';


// const app = document.querySelector(`.app`);
// let currentScreen;
//
// const renderScreen = (template) => {
//   currentScreen = app.querySelector(`.main`);
//   app.replaceChild(template, currentScreen);
// };

const screens = {
  'artist': screenLevelArtist,
  'genre': screenLevelGenre
};

const mainTemplate = document.querySelector(`.main`);

const renderScreen = (screen) => {
  mainTemplate.innerHTML = ``;
  switch (screen.level) {
    case 0: {
      mainTemplate.appendChild(screenWelcome);
      break;
    }
    case `fail`: {
      mainTemplate.appendChild(resultScreen(screen, statsArray));
      break;
    }
    default: {
      if (levels[`state-` + screen.level]) {
        const level = levels[`state-` + screen.level];
        const screenRender = screens[level.type];

        mainTemplate.appendChild(screenRender(screen));
      } else {
        screen.points = countPoint(statsArray, screen.lives);
        mainTemplate.appendChild(resultScreen(screen, statsArray));
      }
      break;
    }
  }
};

export default renderScreen;
