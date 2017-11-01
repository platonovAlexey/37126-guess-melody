import WelcomeView from './welcome-view';
import setScreen from '../../helpers/set-screen';
import App from '../../application';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    setScreen(this.view);

    this.view.onClick = () => {
      App.startGame();
    };
  }
}

export default new WelcomeScreen();
