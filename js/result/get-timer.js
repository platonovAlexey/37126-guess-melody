const timeMessage = `Время вышло`;

const getTimer = (second) => {
  return {
    data: second,
    tick() {
      return (second === 0) ? timeMessage : getTimer(second - 1);
    }
  };
};

export {timeMessage, getTimer};
