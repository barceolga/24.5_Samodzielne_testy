// calculateStylePoints.js


const calculateStylePoints = styleNotes => {
  if (styleNotes.length = 5) {
    let stylePointsOrdered = styleNotes.sort(function(a, b) {
    return a - b;
    });
    const [ ,second, third, forth, ] = stylePointsOrdered;
    return second + third + forth;
  } else {
    return 'The number of values provided into the array styleNotes must be equal to 5.';
  }
};

module.exports = calculateStylePoints;
