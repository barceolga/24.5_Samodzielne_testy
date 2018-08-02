// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let totalDistancePoints;
  switch(true) {
    case (hillSize == 'normal'):
      totalDistancePoints = 60 + (2 * (distance - kPoint));
      return totalDistancePoints;
    break;
    case (hillSize == 'big'):
      totalDistancePoints = 60 + (1.8 * (distance - kPoint));
      return totalDistancePoints;
    break;
    case (hillSize == 'mammoth'):
      totalDistancePoints = 120 + (1.2 * (distance - kPoint));
      return totalDistancePoints;
    break;
    default:
      return 'We do not have any other type of hill';
    break;
  }
};

module.exports = calculateDistancePoints;
