import toSortOrder from '../index';

describe('toSortOrder', () => {
    test('Converts "ascend" to "asc"', () => {
        expect(toSortOrder('ascend')).toBe('asc');
    });

    test('Converts "descend" to "desc"', () => {
        expect(toSortOrder('descend')).toBe('desc');
    });

    test('Returns undefined for invalid input', () => {
        expect(toSortOrder('ascending')).toBeUndefined();
        expect(toSortOrder('descending')).toBeUndefined();
        expect(toSortOrder('random')).toBeUndefined();
        expect(toSortOrder('')).toBeUndefined();
        expect(toSortOrder(null as any)).toBeUndefined();
        expect(toSortOrder(undefined as any)).toBeUndefined();
    });

    test('Handles case sensitivity', () => {
        expect(toSortOrder('Ascend')).toBeUndefined();
        expect(toSortOrder('DESCEND')).toBeUndefined();
    });
});
