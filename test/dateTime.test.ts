import DateTime from '../src/dateTime';
const {
    formatDate,
    formatDateHours,
    formatDateTime,
    formatDayHours,
    formatHours,
    formatMinute,
    formatSecond,
} = DateTime;

describe('utils.dateTime', () => {
    test('formatDate timestamp to YYYY-MM-DD', () => {
        const dateTime = 1627457470000;
        const expected = '2021-07-28';
        const newVal = formatDate(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDate string to YYYY-MM-DD', () => {
        const dateTime = '2021-07-28';
        const expected = '2021-07-28';
        const newVal = formatDate(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDate number to YYYY-MM-DD', () => {
        const dateTime = 11111111111;
        const expected = '1970-05-09';
        const newVal = formatDate(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateHours timestamp to YYYY-MM-DD HH:mm', () => {
        const dateTime = 1627457470000;
        const expected = '2021-07-28 15:31';
        const newVal = formatDateHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateHours string to YYYY-MM-DD HH:mm', () => {
        const dateTime = '2021-07-28 15:31';
        const expected = '2021-07-28 15:31';
        const newVal = formatDateHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateHours number to YYYY-MM-DD HH:mm', () => {
        const dateTime = 11111111111;
        const expected = '1970-05-09 22:25';
        const newVal = formatDateHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateTime timestamp to YYYY-MM-DD HH:mm:ss', () => {
        const dateTime = 1627457470000;
        const expected = '2021-07-28 15:31:10';
        const newVal = formatDateTime(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateTime string to YYYY-MM-DD HH:mm:ss', () => {
        const dateTime = '2021-07-28 15:31:10';
        const expected = '2021-07-28 15:31:10';
        const newVal = formatDateTime(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDateTime number to YYYY-MM-DD HH:mm:ss', () => {
        const dateTime = 11111111111;
        const expected = '1970-05-09 22:25:11';
        const newVal = formatDateTime(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDayHours timestamp to MM-DD HH:mm', () => {
        const dateTime = 1627457470000;
        const expected = '07-28 15:31';
        const newVal = formatDayHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDayHours string to MM-DD HH:mm', () => {
        const dateTime = '07-28 15:31';
        const expected = '07-28 15:31';
        const newVal = formatDayHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatDayHours number to MM-DD HH:mm', () => {
        const dateTime = 11111111111;
        const expected = '05-09 22:25';
        const newVal = formatDayHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatHours timestamp to HH:mm', () => {
        const dateTime = 1627457470000;
        const expected = '15:31';
        const newVal = formatHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatHours string to HH:mm', () => {
        const dateTime = '07-28 15:31';
        const expected = '15:31';
        const newVal = formatHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatHours number to HH:mm', () => {
        const dateTime = 11111111111;
        const expected = '22:25';
        const newVal = formatHours(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatMinute timestamp to HH:mm:ss', () => {
        const dateTime = 1627457470000;
        const expected = '15:31:10';
        const newVal = formatMinute(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatMinute string to HH:mm:ss', () => {
        const dateTime = '08-22 15:31:10';
        const expected = '15:31:10';
        const newVal = formatMinute(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatMinute number to HH:mm:ss', () => {
        const dateTime = 11111111111;
        const expected = '22:25:11';
        const newVal = formatMinute(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatSecond number to HH[h]mm[m]ss[s]', () => {
        const dateTime = 11111;
        const expected = '3h5m11s';
        const newVal = formatSecond(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatSecond number to mm[m]ss[s]', () => {
        const dateTime = 111;
        const expected = '1m51s';
        const newVal = formatSecond(dateTime);
        expect(newVal).toEqual(expected);
    });
    test('formatSecond number to ss[s]', () => {
        const dateTime = 11;
        const expected = '11s';
        const newVal = formatSecond(dateTime);
        expect(newVal).toEqual(expected);
    });
});
