type TimeUnit = 'h' | 'm' | 's';

interface FormatSecondOptions {
    /** 单位文案映射 */
    units?: Partial<Record<TimeUnit, string>>;
    /** 是否补零 */
    padZero?: boolean;
}

/**
 * 将秒数格式化为可读的时间字符串。
 *
 * 支持：
 * - 自定义时间单位（h / m / s）
 * - 数值补零（padZero）
 * - 通过 format 模板输出（如 HH:mm:ss）
 *
 * @category 格式化
 *
 * @param {number} secondTime
 *  需要转换的秒数（小于等于 0、NaN、非数字将视为 0）
 *
 * @param {Object} [options]
 *  格式化选项
 *
 * @param {boolean} [options.padZero=false]
 *  是否对小时、分钟、秒进行补零（如 02h、03m、09s）
 *
 * @param {Object} [options.units]
 *  时间单位映射，可自定义 h / m / s 的展示文案
 *
 * @param {string} [options.format]
 *  格式化模板，支持 HH、mm、ss（如 HH:mm:ss）
 *  若传入 format，则优先使用模板输出
 *
 * @returns {string}
 *  格式化后的时间字符串
 *
 * @example
 * ```ts
 * import { formatSecond } from 'dt-utils';
 *
 * // 基本用法（默认单位：h / m / s）
 * formatSecond(3661)  // => '1h1m1s'
 *
 *
 * formatSecond(59)  // => '59s'
 *
 * formatSecond(0)  // => '0s'
 *
 * // 补零
 * formatSecond(3661, { padZero: true })  // => '01h01m01s'
 *
 * formatSecond(60, { padZero: true })  // => '01m'
 *
 * // 自定义单位（中文）
 * formatSecond(1106, {
 *   units: { h: '小时', m: '分', s: '秒' },
 * })  // => '18分26秒'
 *
 * // 使用 format 模板（运行时长）
 * formatSecond(12078, {
 *   format: 'HH:mm:ss',
 *   padZero: true,
 * })  // => '03:21:18'
 *
 * // 边界情况
 * formatSecond(-1)  // => '0s'
 *
 * formatSecond(NaN)  // => '0s'
 *
 * formatSecond()  // => '0s'
 * ```
 */
export const formatSecond = (secondTime = 0, options: FormatSecondOptions = {}): string => {
    const { units = { h: 'h', m: 'm', s: 's' }, padZero = false } = options;

    if (typeof secondTime !== 'number' || isNaN(secondTime) || secondTime <= 0) {
        return padZero ? `00${units.s}` : `0${units.s}`;
    }

    const totalSeconds = Math.floor(secondTime);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => (padZero ? String(num).padStart(2, '0') : String(num));

    const parts: string[] = [];
    if (hours > 0) parts.push(`${pad(hours)}${units.h}`);
    if (minutes > 0) parts.push(`${pad(minutes)}${units.m}`);
    if (seconds > 0 || parts.length === 0) parts.push(`${pad(seconds)}${units.s}`);

    return parts.join('');
};

export default formatSecond;
