/**
 * 将秒数转换为时间格式 (HH[h]mm[m]ss[s])
 *
 * @category 格式化
 *
 * @param {number} secondTime - 需要转换的秒数
 * @param {boolean} padZero - 是否使用 HH[h]mm[m]ss[s] 格式
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
 *
 * // 使用 HH[h]mm[m]ss[s] 格式
 * formatSecond(3661)   // => '01h01m01s'
 * formatSecond(60)     // => '01m'
 * formatSecond(0)      // => '00s'
 * ```
 */
export const formatSecond = (secondTime = 0, padZero = false): string => {
    if (typeof secondTime !== 'number' || isNaN(secondTime) || secondTime <= 0) {
        return padZero ? '00s' : '0s';
    }

    const totalSeconds = Math.floor(secondTime);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => (padZero ? String(num).padStart(2, '0') : String(num));

    const parts: string[] = [];
    if (hours > 0) parts.push(`${pad(hours)}h`);
    if (minutes > 0) parts.push(`${pad(minutes)}m`);
    if (seconds > 0 || parts.length === 0) parts.push(`${pad(seconds)}s`);

    return parts.join('');
};
export default formatSecond;
