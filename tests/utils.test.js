const { getBaseLog } = require('../js/utils.js');

describe('getBaseLog', () => {
    it('should calculate log base 2 of 8 as 3', () => {
        expect(getBaseLog(2, 8)).toBe(3);
    });

    it('should calculate log base 10 of 100 as 2', () => {
        expect(getBaseLog(10, 100)).toBe(2);
    });

    it('should handle fractional answers', () => {
        // Use toBeCloseTo for float comparison due to JS math precision
        expect(getBaseLog(4, 2)).toBeCloseTo(0.5);
    });

    it('should calculate log base 10 of 1 as 0', () => {
        expect(getBaseLog(10, 1)).toBe(0);
    });

    it('should return NaN when calculating log base with negative numbers', () => {
        expect(getBaseLog(-2, 8)).toBeNaN();
    });

    it('should return NaN when y is negative', () => {
        expect(getBaseLog(2, -8)).toBeNaN();
    });
});
