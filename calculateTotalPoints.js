// calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, gateFactor, windFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
    totalPoints = distancePoints + stylePoints + gateFactor + windFactor;
  return totalPoints.toFixed(1);
}

module.exports = calculateTotalPoints;
