import dayjs from 'dayjs';

import formatDateTime, { DateTimeFormat } from '..';

describe('formatDateTime', () => {
    const testDate = new Date('2023-05-15T14:30:45');

    test('should correctly format date using standard format', () => {
        expect(formatDateTime(testDate, DateTimeFormat.STANDARD)).toBe('2023-05-15 14:30:45');
    });

    test('should correctly format years', () => {
        expect(formatDateTime(testDate, DateTimeFormat.YEAR)).toBe('2023');
        expect(formatDateTime(testDate, DateTimeFormat.YEAR_SHORT)).toBe('23');
    });

    test('should correctly format months', () => {
        expect(formatDateTime(testDate, DateTimeFormat.MONTH)).toBe('05');
        expect(formatDateTime(testDate, DateTimeFormat.MONTH_SHORT)).toBe('5');
        expect(formatDateTime(testDate, DateTimeFormat.MONTH_NAME)).toMatch('May');
        expect(formatDateTime(testDate, DateTimeFormat.MONTH_NAME_SHORT)).toMatch('May');
    });

    test('should correctly format dates', () => {
        expect(formatDateTime(testDate, DateTimeFormat.DAY)).toBe('15');
        expect(formatDateTime(testDate, DateTimeFormat.DAY_SHORT)).toBe('15');
        expect(formatDateTime(testDate, DateTimeFormat.WEEKDAY)).toMatch('Monday');
        expect(formatDateTime(testDate, DateTimeFormat.WEEKDAY_SHORT)).toMatch('Mon');
    });

    test('should correctly format times', () => {
        expect(formatDateTime(testDate, DateTimeFormat.HOUR)).toBe('14');
        expect(formatDateTime(testDate, DateTimeFormat.HOUR_SHORT)).toBe('14');
        expect(formatDateTime(testDate, DateTimeFormat.HOUR_12)).toBe('02');
        expect(formatDateTime(testDate, DateTimeFormat.HOUR_12_SHORT)).toBe('2');
        expect(formatDateTime(testDate, DateTimeFormat.MINUTE)).toBe('30');
        expect(formatDateTime(testDate, DateTimeFormat.MINUTE_SHORT)).toBe('30');
        expect(formatDateTime(testDate, DateTimeFormat.SECOND)).toBe('45');
        expect(formatDateTime(testDate, DateTimeFormat.SECOND_SHORT)).toBe('45');
    });

    test('should correctly format timezones', () => {
        const timezoneResult = formatDateTime(testDate, DateTimeFormat.TIMEZONE);
        expect(typeof timezoneResult).toBe('string');
        expect(timezoneResult).toMatch(/[+-]\d{2}:\d{2}|Z/);

        const timezoneISOResult = formatDateTime(testDate, DateTimeFormat.TIMEZONE_ISO);
        expect(typeof timezoneISOResult).toBe('string');
        expect(timezoneISOResult).toMatch(/[+-]\d{4}|Z/);
    });

    // Test common combined formats
    test('should correctly format common combined formats', () => {
        expect(formatDateTime(testDate, DateTimeFormat.DATE)).toBe('2023-05-15');
        expect(formatDateTime(testDate, DateTimeFormat.TIME)).toBe('14:30:45');

        const time12Result = formatDateTime(testDate, DateTimeFormat.TIME_12);
        expect(time12Result).toMatch(/02:30:45 (AM|PM)/);

        expect(formatDateTime(testDate, DateTimeFormat.DATE_TIME)).toBe('2023-05-15 14:30');

        const dateTime12Result = formatDateTime(testDate, DateTimeFormat.DATE_TIME_12);
        expect(dateTime12Result).toMatch(/2023-05-15 02:30 (AM|PM)/);

        const isoResult = formatDateTime(testDate, DateTimeFormat.ISO);
        expect(isoResult).toMatch(/2023-05-15T14:30:45[+-]\d{2}:\d{2}|Z/);

        const fullDatetimeISOResult = formatDateTime(testDate, DateTimeFormat.FULL_DATETIME_ISO);
        expect(fullDatetimeISOResult).toMatch(/2023-05-15T14:30:45[+-]\d{2}:\d{2}|Z/);
    });

    test('should handle different date input types', () => {
        // String input
        expect(formatDateTime('2023-05-15T14:30:45Z', DateTimeFormat.DATE)).toBe('2023-05-15');

        // Timestamp input
        const timestamp = testDate.getTime();
        expect(formatDateTime(timestamp, DateTimeFormat.DATE)).toBe('2023-05-15');

        // Dayjs object input
        const dayjsObj = dayjs('2023-05-15T14:30:45Z');
        expect(formatDateTime(dayjsObj, DateTimeFormat.DATE)).toBe('2023-05-15');
    });

    test('should handle invalid format', () => {
        const result = formatDateTime(testDate, 'INVALID_FORMAT');
        expect(result).toBeInstanceOf(dayjs);
    });

    // Test edge cases
    test('should handle edge case dates', () => {
        // Year boundaries
        const yearMin = new Date('0001-01-01T00:00:00');
        expect(formatDateTime(yearMin, DateTimeFormat.YEAR)).toBe('0001');

        const yearMax = new Date('9999-12-31T23:59:59');
        expect(formatDateTime(yearMax, DateTimeFormat.YEAR)).toBe('9999');

        // Leap year
        const leapYear = new Date('2024-02-29T12:00:00');
        expect(formatDateTime(leapYear, DateTimeFormat.DATE)).toBe('2024-02-29');
    });

    // Test invalid input
    test('should handle invalid date input', () => {
        const invalidDate = 'not-a-date';
        const result = formatDateTime(invalidDate, DateTimeFormat.STANDARD);
        expect(result).toBe('Invalid Date');
    });
});
