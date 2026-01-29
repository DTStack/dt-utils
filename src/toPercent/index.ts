/**
 * 将数字格式化为百分比字符串。
 *
 * @category 转换
 * @description
 * 将十进制数转换为百分比字符串表示。
 *
 * @param {number} num - 要转换为百分比的十进制数
 * @param {number} [precision=2] - 要四舍五入到的小数位数（默认值：2）
 * @returns {string} 具有指定精度的格式化百分比字符串
 *
 * @example
 * ```typescript
 * import { toPercent } from 'dt-utils';
 *
 * // 基本用法
 * toPercent(0.1234)      // => "12.34%"
 *
 * // 自定义精度
 * toPercent(0.1234, 1)   // => "12.3%"
 * toPercent(1.2345, 3)   // => "123.345%"
 *
 * // 处理负数
 * toPercent(-0.089, 1)   // => "-8.9%"
 *
 * // 边界情况
 * toPercent(0.00000001)  // => "0%"
 * toPercent(NaN)         // => "0%"
 * toPercent(Infinity)    // => "0%"
 * toPercent(null)        // => "0%"
 * toPercent(undefined)   // => "0%"
 * ```
 */
const toPercent = (num: number, precision = 2): string => {
    if (num === null || num === undefined || num === Infinity || num === -Infinity || isNaN(num)) {
        return '0%';
    }

    try {
        // Convert number to percentage and handle precision
        const value = Number(num);
        const multiplied = value * 100;

        // Handle extremely small values to avoid scientific notation
        if (Math.abs(multiplied) < 0.000001) {
            return '0%';
        }

        const formatted = Number(multiplied.toFixed(precision)).toString();

        return `${formatted}%`;
    } catch (error) {
        console.warn('toPercent 转换失败:', error);
        return '0%';
    }
};

export default toPercent;
