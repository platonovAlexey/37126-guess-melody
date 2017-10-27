import WelcomeView from './welcome-view';
import setScreen from '../../helpers/set-screen';
import startGame from '../game';

const welcome = new WelcomeView();

welcome.onClick = () => {
  setScreen(startGame());
};

export default () => welcome;
