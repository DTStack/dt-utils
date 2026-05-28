import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone'; // ES 2015
import utc from 'dayjs/plugin/utc'; // ES 2015

dayjs.extend(utc);
dayjs.extend(timezone);
// 默认时区：东八时区 (Asia/Shanghai)
const DEFAULT_TIMEZONE = 'Asia/Shanghai';
/**
 * 将时间转换为默认时区
 * @param {string | number | Date} time - 输入时间
 * @return {dayjs.Dayjs} 带时区的Dayjs对象
 */
dayjs.tz.setDefault(DEFAULT_TIMEZONE);
/**
 * @category 枚举
 * 日期和时间格式模式的枚举
 * 提供标准化的格式标记以实现一致的日期/时间格式化
 */
export enum DateTimeFormat {
    // 年份格式
    /** 表示4位数年份 (例如 2024) */
    YEAR = 'YYYY',
    /** 表示2位数年份 (例如 24) */
    YEAR_SHORT = 'YY',

    // 月份格式
    /** 表示带前导零的月份 (01-12) */
    MONTH = 'MM',
    /** 表示不带前导零的月份 (1-12) */
    MONTH_SHORT = 'M',
    /** 表示完整月份名称 (例如 January) */
    MONTH_NAME = 'MMMM',
    /** 表示缩写月份名称 (例如 Jan) */
    MONTH_NAME_SHORT = 'MMM',

    // 日期格式
    /** 表示带前导零的月份中的日期 (01-31) */
    DAY = 'DD',
    /** 表示不带前导零的月份中的日期 (1-31) */
    DAY_SHORT = 'D',
    /** 表示完整星期几名称 (例如 Monday) */
    WEEKDAY = 'dddd',
    /** 表示缩写星期几名称 (例如 Mon) */
    WEEKDAY_SHORT = 'ddd',

    // 时间格式
    /** 表示24小时制带前导零的小时 (00-23) */
    HOUR = 'HH',
    /** 表示24小时制不带前导零的小时 (0-23) */
    HOUR_SHORT = 'H',
    /** 表示12小时制带前导零的小时 (01-12) */
    HOUR_12 = 'hh',
    /** 表示12小时制不带前导零的小时 (1-12) */
    HOUR_12_SHORT = 'h',
    /** 表示带前导零的分钟 (00-59) */
    MINUTE = 'mm',
    /** 表示不带前导零的分钟 (0-59) */
    MINUTE_SHORT = 'm',
    /** 表示带前导零的秒数 (00-59) */
    SECOND = 'ss',
    /** 表示不带前导零的秒数 (0-59) */
    SECOND_SHORT = 's',

    // 时区格式
    /** 表示时区偏移 (例如 +07:00) */
    TIMEZONE = 'Z',
    /** 表示ISO格式的时区偏移 (例如 +0700) */
    TIMEZONE_ISO = 'ZZ',

    // 常用组合格式
    /** 标准日期时间格式 (例如 2024-03-21 15:30:45) */
    STANDARD = 'YYYY-MM-DD HH:mm:ss',
    /** ISO 8601兼容格式 (例如 2024-03-21T15:30:45+0700) */
    ISO = 'YYYY-MM-DDTHH:mm:ssZ',
    /** 仅日期格式 (例如 2024-03-21) */
    DATE = 'YYYY-MM-DD',
    /** 24小时制时间格式 (例如 15:30:45) */
    TIME = 'HH:mm:ss',
    /** 带午前/午后的12小时制时间格式 (例如 03:30:45 PM) */
    TIME_12 = 'hh:mm:ss A',
    /** 带24小时制时间的日期 (例如 2024-03-21 15:30) */
    DATE_TIME = 'YYYY-MM-DD HH:mm',
    /** 带12小时制时间和午前/午后的日期 (例如 2024-03-21 03:30 PM) */
    DATE_TIME_12 = 'YYYY-MM-DD hh:mm A',
    /** 完整的ISO日期时间格式 (例如 2024-03-21T15:30:45+0700) */
    FULL_DATETIME_ISO = 'YYYY-MM-DDTHH:mm:ssZ',
}

type DateTimeInput = string | number | Date | dayjs.Dayjs;
type FormatPattern = DateTimeFormat | string;
/**
 * 一个日期时间格式化工具，可处理各种输入类型和格式化模式。
 *
 * @category 格式化
 * @description
 * 将日期或时间戳格式化为指定格式的字符串。
 * 支持多种输入类型和格式化模式。
 *
 * @param {DateTimeInput} date - 输入日期值，支持多种格式：
 *   - Date对象: new Date()
 *   - 时间戳: 1674633600000
 *   - ISO字符串: "2023-01-15T14:30:00"
 *   - dayjs对象: dayjs()
 * @param {FormatPattern} format - 期望的输出格式：
 *   - 使用DateTimeFormat枚举以保持一致的格式化
 *   - 或提供自定义格式字符串
 * @returns {string | dayjs.Dayjs} 格式化后的日期字符串或 dayjs 实例对象
 *
 * @example
 * ```typescript
 * import { formatDateTime } from 'dt-utils';
 *
 * // 标准日期格式
 * formatDateTime(new Date(), DateTimeFormat.STANDARD)  // "2024-03-21 15:30:45"
 *
 * // 从时间戳格式化
 * formatDateTime(1674633600000, DateTimeFormat.DATE_TIME)  // "2023-01-25 10:00"
 *
 * // 格式化月份名称
 * formatDateTime("2023-01-15", DateTimeFormat.MONTH_NAME)  // "January"
 *
 * // 12小时制时间格式
 * formatDateTime(new Date(), DateTimeFormat.TIME_12)  // "03:30:45 PM"
 *
 * // 完整星期几名称
 * formatDateTime(new Date(), DateTimeFormat.WEEKDAY)  // "Thursday"
 *
 * // 自定义格式
 * formatDateTime(new Date(), "dddd, MMMM D, YYYY")  // dayjs.Dayjs
 * ```
 */
/**
 * Helper function to convert date to default timezone
 */
const toDefaultTz = (date: DateTimeInput): dayjs.Dayjs => {
    // 如果已经是 dayjs 对象且支持 tz，直接转换到默认时区
    if ((date as any) && typeof (date as any).tz === 'function') {
        return (date as any).tz(DEFAULT_TIMEZONE);
    }
    // 否则使用 dayjs.tz 将输入解析为默认时区的 dayjs 对象
    // 对于无效日期，dayjs.tz 可能会抛出错误，此时降级到普通 dayjs
    try {
        return (dayjs as any).tz(date, DEFAULT_TIMEZONE);
    } catch {
        return dayjs(date);
    }
};

/**
 * Normalize input to native Date object
 */
const getNativeDate = (date: DateTimeInput): Date | null => {
    if ((date as any) && typeof (date as any).toDate === 'function') {
        return (date as any).toDate();
    } else if (date instanceof Date) {
        return date as Date;
    } else {
        const d = new Date(date as any);
        return Number.isNaN(d.getTime()) ? null : d;
    }
};

/**
 * Check if a date is an edge-case year (year < 1900)
 * Edge-case years may have parsing inconsistencies in dayjs/timezone
 */
const isEdgeCaseYear = (date: DateTimeInput): boolean => {
    const nativeDate = getNativeDate(date);
    if (!nativeDate) return false;
    return nativeDate.getFullYear() < 1900;
};

/**
 * Format native Date object using dayjs-like format string
 * Leverages dayjs for standard tokens, only customizing where needed
 */
const formatNativeDate = (nativeDate: Date, format: string): string => {
    const pad = (num: number, len = 2) => String(num).padStart(len, '0');
    const d = nativeDate;
    // 使用dayjs进行标准格式化
    const dayjsInstance = dayjs(d);
    // 只维护自定义tokens，主要用于处理时区格式，因为原生Date对象不支持dayjs的时区功能
    const customTokens: Record<string, () => string> = {
        // 时区 Z 替换成 +08:00 格式
        Z: () => {
            const offset = d.getTimezoneOffset();
            const sign = offset <= 0 ? '+' : '-';
            const h = Math.abs(Math.floor(offset / 60));
            const m = Math.abs(offset % 60);
            return `${sign}${pad(h)}:${pad(m)}`;
        },
        // 时区 ZZ 替换成 +0800 格式
        ZZ: () => {
            const offset = d.getTimezoneOffset();
            const sign = offset <= 0 ? '+' : '-';
            const h = Math.abs(Math.floor(offset / 60));
            const m = Math.abs(offset % 60);
            return `${sign}${pad(h)}${pad(m)}`;
        },
    };

    // 通过长度将 tokens 排序，避免 Z 早于 ZZ 这种情况
    const sortedCustomTokens = Object.keys(customTokens).sort((a, b) => b.length - a.length);
    let result = format;
    for (const token of sortedCustomTokens) {
        const regex = new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(regex, customTokens[token]());
    }
    result = dayjsInstance.format(result);

    return result;
};

export const formatDateTime = (
    date: DateTimeInput,
    format: FormatPattern = DateTimeFormat.STANDARD
): string | dayjs.Dayjs => {
    const isValidFormat = Object.values<string>(DateTimeFormat).includes(format);
    if (!isValidFormat) {
        return toDefaultTz(date);
    }

    // 检测是否为极早年份（< 1900）：边缘情况年份可能存在解析问题，因此需要特殊处理
    if (isEdgeCaseYear(date)) {
        const nativeDate = getNativeDate(date);
        if (!nativeDate) {
            return 'Invalid Date';
        }
        return formatNativeDate(nativeDate, format as string);
    }

    return toDefaultTz(date).format(format);
};

export default formatDateTime;
