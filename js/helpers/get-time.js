const getTime = (time, type) => {
  const value = type === `min` ? Math.trunc(time / 60) : Math.trunc(time % 60);

  return value.toString().length > 1 ? value : `0` + value;
};

export default getTime;
