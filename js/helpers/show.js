const app = document.querySelector(`.app`);
let currentScreen;

const renderScreen = (template) => {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

export default renderScreen;
