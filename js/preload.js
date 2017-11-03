export default (src) => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.playit = () => resolve(audio);
    audio.src = src;
  });
};
