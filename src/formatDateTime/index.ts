import dayjs from 'dayjs';

/**
 * @enum
 * Enumeration of date and time format patterns
 * Provides standardized format tokens for consistent date/time formatting
 */
export enum DateTimeFormat {
    // Year Formats
    /** Represents year in 4 digits (e.g. 2024) */
    YEAR = 'YYYY',
    /** Represents year in 2 digits (e.g. 24) */
    YEAR_SHORT = 'YY',

    // Month Formats
    /** Represents month with leading zero (01-12) */
    MONTH = 'MM',
    /** Represents month without leading zero (1-12) */
    MONTH_SHORT = 'M',
    /** Represents full month name (e.g. January) */
    MONTH_NAME = 'MMMM',
    /** Represents abbreviated month name (e.g. Jan) */
    MONTH_NAME_SHORT = 'MMM',

    // Date Formats
    /** Represents day of month with leading zero (01-31) */
    DAY = 'DD',
    /** Represents day of month without leading zero (1-31) */
    DAY_SHORT = 'D',
    /** Represents full weekday name (e.g. Monday) */
    WEEKDAY = 'dddd',
    /** Represents abbreviated weekday name (e.g. Mon) */
    WEEKDAY_SHORT = 'ddd',

    // Time Formats
    /** Represents hour in 24-hour format with leading zero (00-23) */
    HOUR = 'HH',
    /** Represents hour in 24-hour format without leading zero (0-23) */
    HOUR_SHORT = 'H',
    /** Represents hour in 12-hour format with leading zero (01-12) */
    HOUR_12 = 'hh',
    /** Represents hour in 12-hour format without leading zero (1-12) */
    HOUR_12_SHORT = 'h',
    /** Represents minutes with leading zero (00-59) */
    MINUTE = 'mm',
    /** Represents minutes without leading zero (0-59) */
    MINUTE_SHORT = 'm',
    /** Represents seconds with leading zero (00-59) */
    SECOND = 'ss',
    /** Represents seconds without leading zero (0-59) */
    SECOND_SHORT = 's',

    // Timezone Formats
    /** Represents timezone offset (e.g. +07:00) */
    TIMEZONE = 'Z',
    /** Represents ISO format timezone offset (e.g. +0700) */
    TIMEZONE_ISO = 'ZZ',

    // Commonly Used Combined Formats
    /** Standard datetime format (e.g. 2024-03-21 15:30:45) */
    STANDARD = 'YYYY-MM-DD HH:mm:ss',
    /** ISO 8601 compliant format (e.g. 2024-03-21T15:30:45+0700) */
    ISO = 'YYYY-MM-DDTHH:mm:ssZ',
    /** Date only format (e.g. 2024-03-21) */
    DATE = 'YYYY-MM-DD',
    /** 24-hour time format (e.g. 15:30:45) */
    TIME = 'HH:mm:ss',
    /** 12-hour time format with meridiem (e.g. 03:30:45 PM) */
    TIME_12 = 'hh:mm:ss A',
    /** Date with 24-hour time (e.g. 2024-03-21 15:30) */
    DATE_TIME = 'YYYY-MM-DD HH:mm',
    /** Date with 12-hour time and meridiem (e.g. 2024-03-21 03:30 PM) */
    DATE_TIME_12 = 'YYYY-MM-DD hh:mm A',
    /** Complete ISO datetime format (e.g. 2024-03-21T15:30:45+0700) */
    FULL_DATETIME_ISO = 'YYYY-MM-DDTHH:mm:ssZ',
}

type DateTimeInput = string | number | Date | dayjs.Dayjs;
type FormatPattern = DateTimeFormat | string;

/**
 * A powerful date-time formatting utility that handles various input types and formatting patterns.
 *
 * @category Formatting
 * @description
 * This function formats a date or timestamp into a string using the specified format.
 * It supports various input types and formatting patterns.
 *
 * @param {DateTimeInput} date - Input date value, supports multiple formats:
 *   - Date object: new Date()
 *   - Timestamp: 1674633600000
 *   - ISO string: "2023-01-15T14:30:00"
 *   - dayjs object: dayjs()
 * @param {FormatPattern} format - Desired output format:
 *   - Use DateTimeFormat enum for consistent formatting
 *   - Or provide custom format string
 * @returns {string | dayjs.Dayjs} Formatted date string or dayjs object
 *
 * @example
 * ```typescript
 * import { formatDateTime } from 'dt-utils';
 *
 * // Standard date format
 * formatDateTime(new Date(), DateTimeFormat.STANDARD)  // "2024-03-21 15:30:45"
 *
 * // Format from timestamp
 * formatDateTime(1674633600000, DateTimeFormat.DATE_TIME)  // "2023-01-25 10:00"
 *
 * // Format with month name
 * formatDateTime("2023-01-15", DateTimeFormat.MONTH_NAME)  // "January"
 *
 * // 12-hour time format
 * formatDateTime(new Date(), DateTimeFormat.TIME_12)  // "03:30:45 PM"
 *
 * // Full weekday name
 * formatDateTime(new Date(), DateTimeFormat.WEEKDAY)  // "Thursday"
 *
 * // Custom format
 * formatDateTime(new Date(), "dddd, MMMM D, YYYY")  // dayjs.Dayjs
 * ```
 */
export const formatDateTime = (
    date: DateTimeInput,
    format: FormatPattern = DateTimeFormat.STANDARD
): string | dayjs.Dayjs => {
    const isValidFormat = Object.values<string>(DateTimeFormat).includes(format);

    if (!isValidFormat) {
        return dayjs(date);
    }
    return dayjs(date).format(format);
};

export default formatDateTime;
