const getRandomElement = (array) => {
  let number = Math.floor(Math.random() * (array.length - 1));
  return array[number];
};

export default getRandomElement;
