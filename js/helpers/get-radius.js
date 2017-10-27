const getRadius = (ratio, radius) => {
  const circleLength = Math.round(2 * Math.PI * radius);
  const leftStroke = Math.round(circleLength * ratio);
  const offsetLength = circleLength - leftStroke;

  return {
    stroke: leftStroke,
    offset: offsetLength
  };
};

export default getRadius;
