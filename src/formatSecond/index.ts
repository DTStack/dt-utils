/**
 * 将秒数转换为时间格式 (HH[h]mm[m]ss[s])
 *
 * @category 格式化
 *
 * @param {number} secondTime - 需要转换的秒数
 * @returns {string} 格式化后的时间字符串，包含小时(h)、分钟(m)和秒(s)
 *
 * @example
 * ```typescript
 * import { formatSecond } from 'dt-utils';
 *
 * // 基本用法
 * formatSecond(3661)   // => '1h1m1s'
 * formatSecond(59)     // => '59s'
 * formatSecond(0)      // => '0s'
 *
 * // 处理大数字
 * formatSecond(7323)   // => '2h2m3s'
 * formatSecond(3600)   // => '1h'
 *
 * // 处理边界情况
 * formatSecond(-1)     // => '0s'
 * formatSecond(NaN)    // => '0s'
 * formatSecond()       // => '0s'
 * ```
 */
const formatSecond = (secondTime = 0): string => {
    if (typeof secondTime !== 'number' || isNaN(secondTime) || secondTime <= 0) {
        return '0s';
    }

    const absSeconds = Math.floor(secondTime);

    if (absSeconds === 0) {
        return '0s';
    }

    const TIME_UNITS = {
        h: 3600,
        m: 60,
        s: 1,
    };

    const hours = Math.floor(absSeconds / TIME_UNITS.h);
    const minutes = Math.floor((absSeconds % TIME_UNITS.h) / TIME_UNITS.m);
    const seconds = absSeconds % TIME_UNITS.m;

    const parts: string[] = [];

    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

    return parts.join('');
};

export default formatSecond;
