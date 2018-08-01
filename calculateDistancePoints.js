// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let totalDistancePoints;
  if (hillSize == 'normal' ){
    totalDistancePoints = 60 + (2 * (distance - kPoint));
  } else if (hillSize == 'big') {
    totalDistancePoints = 60 + (1.8 * (distance - kPoint));
  } else if (hillSize == 'mammoth') {
    totalDistancePoints = 120 + (1.2 * (distance - kPoint));
  }
  return totalDistancePoints;
};

module.exports = calculateDistancePoints;
