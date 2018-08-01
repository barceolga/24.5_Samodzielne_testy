const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
  describe('normal takeof', () => {
    it('should return 71', () => {
        const actual = calculateDistancePoints(103.5, 'normal', 98);

        const expected = '71';

        assert.equal(actual, expected);
    });

    it('should return 65', () => {
        const actual = calculateDistancePoints(100.5, 'normal', 98);

        const expected = '65';

        assert.equal(actual, expected);
    });

    it('should return 77', () => {
        const actual = calculateDistancePoints(106.5, 'normal', 98);

        const expected = '77';

        assert.equal(actual, expected);
    });
  });

  describe('big takeof', () => {
    it('should return 85.2', () => {
        const actual = calculateDistancePoints(134, 'big', 120);

        const expected = '85.2';

        assert.equal(actual, expected);
    });

    it('schould return 76.2', () => {
        const actual = calculateDistancePoints(129, 'big', 120);

        const expected = '76.2';

        assert.equal(actual, expected);
    });

    it('should return 69', () => {
        const actual = calculateDistancePoints(125, 'big', 120);

        const expected = '69';

        assert.equal(actual, expected);
    });
  });

  describe('mammoth takeof', () => {
    it('should return 151.2', () => {
        const actual = calculateDistancePoints(226, 'mammoth', 200);

        const expected = '151.2';

        assert.equal(actual, expected);
    });

    it('should return 150', () => {
        const actual = calculateDistancePoints(225, 'mammoth', 200);

        const expected = '150';

        assert.equal(actual, expected);
    });

    it('should return 134.4', () => {
        const actual = calculateDistancePoints(212, 'mammoth', 200);

        const expected = '134.4';

        assert.equal(actual, expected);
    });
  });
});
