const getTimer = (second) => {
  if (second === 0) {
    return -1;
  }

  return {
    data: second,
    tick() {
      return this.data - 1;
    }
  };
};

export default getTimer;
