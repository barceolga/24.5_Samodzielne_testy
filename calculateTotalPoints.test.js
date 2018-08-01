const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');

describe('calculateTotalPoints', () => {
  describe('normal takeof', () => {
    it('should return 125.9', () => {
        const actual = calculateTotalPoints(106, 'normal', 98, [18.5, 19, 18.5, 18.5, 18.5], 6.4, -12);

        const expected = '125.9';

        assert.equal(actual, expected);
    });

    it('should return 117.2', () => {
        const actual = calculateTotalPoints(109, 'normal', 98, [17, 16.5, 18.5, 17.5, 18.5], 0, -17.8);

        const expected = '117.2';

        assert.equal(actual, expected);
    });

    it('should return 110.3', () => {
        const actual = calculateTotalPoints(103, 'normal', 98, [17.5, 17.5, 18.5, 18.5, 18.5], 0, -14.2);

        const expected = '110.3';

        assert.equal(actual, expected);
    });
  });

  describe('big takeof', () => {
    it('should return 122.6', () => {
        const actual = calculateTotalPoints(128, 'big', 120, [18.5, 18, 18, 17.5, 18], 0, -5.8)

        const expected = '122.6';

        assert.equal(actual, expected);
    });

    it('should return 115.4', () => {
        const actual = calculateTotalPoints(124, 'big', 120, [17.5, 17, 17.5, 17.5, 17.5], 0, -4.3)

        const expected = '115.4';

        assert.equal(actual, expected);
    });

    it('should return 106.6', () => {
        const actual = calculateTotalPoints(119.5, 'big', 120, [17.5, 17.5, 17, 17.5, 17.5], 0, -5.0)

        const expected = '106.6';

        assert.equal(actual, expected);
    })
  });
  describe('mammoth takeof', () => {
    it('should return 203.7', () => {
        const actual = calculateTotalPoints(223, 'mammoth', 200, [17.5, 18.5, 18, 18.5, 18.5], 8.7, -7.6);

        const expected = '203.7';

        assert.equal(actual, expected);
    });

    it('should return 192.2', () => {
        const actual = calculateTotalPoints(224.5, 'mammoth', 200, [17.5, 18, 18, 18, 18.5], 0, -11.2);

        const expected = '192.2';

        assert.equal(actual, expected);
    });

    it('should return 177.7', () => {
        const actual = calculateTotalPoints(208.5, 'mammoth', 200, [17.5, 17.5, 17.5, 17.5, 17], 0, -5.0);

        const expected = '177.7';

        assert.equal(actual, expected);
    });
  });
});
