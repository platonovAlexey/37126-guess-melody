import {updateTime} from './update-timer';

const getTimer = (val, game) => {
  let timer = null;

  return {
    value: val,
    tick() {
      return --this.value;
    },
    start() {
      let event;
      timer = setInterval(() => {
        if (this.value > 0) {
          this.tick();
          updateTime(this.value);
        } else {
          this.reset();
          if (game) {
            event = new CustomEvent(`gameover`, {
              detail: {
                gameDetail: game
              }
            });
          }
        }
        if (event) {
          document.dispatchEvent(event);
        }
      }, 1000);
    },
    stop() {
      clearInterval(timer);
    },
    reset() {
      this.value = 0;
      clearInterval(timer);
    },
    getCurrentTimer() {
      return this.value;
    }
  };
};

export default getTimer;
