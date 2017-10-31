const mainTag = document.querySelector(`.main`);

const setScreen = (view) => {
  mainTag.innerHTML = ``;
  mainTag.appendChild(view.element);
};

export default setScreen;
