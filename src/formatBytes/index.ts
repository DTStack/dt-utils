type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB';

type FormattedBytes = `${number} ${ByteUnit}` | 'Invalid value' | '0 B';

/**
 * 将字节数值格式化为带单位的字符串表示。
 *
 * @category 格式化
 * @description
 * 自动将字节数值转换为最适合的单位表示形式，支持从字节(B)到尧字节(YB)的单位范围。
 * 转换采用二进制换算(1024进制)，即:
 * - 1 KB = 1024 B
 * - 1 MB = 1024 KB
 * - 以此类推...
 *
 * 特殊情况处理:
 * - 当输入为负数、NaN或Infinity时，返回"Invalid value"
 * - 当输入为0时，返回"0 B"
 *
 * @param {number} value - 要格式化的字节数值
 * @param {number} [decimals=2] - 结果保留的小数位数，默认为2位
 * @returns {FormattedBytes} 格式化后的字符串，例如"1.5 MB"。若输入无效则返回"Invalid value"
 *
 * @example
 * ```typescript
 * import { formatBytes } from 'dt-utils';
 *
 * // 基本格式化
 * formatBytes(1024)        // => "1 KB"
 * formatBytes(1536)        // => "1.5 KB"
 * formatBytes(1048576)     // => "1 MB"
 *
 * // 指定小数位数
 * formatBytes(1234567, 1)  // => "1.2 MB"
 * formatBytes(1234567, 3)  // => "1.178 MB"
 *
 * // 大数值
 * formatBytes(1.5e12)      // => "1.36 TB"
 *
 * // 边界情况
 * formatBytes(0)           // => "0 B"
 * formatBytes(-1024)       // => "Invalid value"
 * formatBytes(Infinity)    // => "Invalid value"
 * formatBytes(NaN)         // => "Invalid value"
 * ```
 *
 * @see {@link https://en.wikipedia.org/wiki/Byte#Multiple-byte_units} 查看更多关于字节单位的信息
 */
const formatBytes = (value: number, decimals = 2): FormattedBytes => {
    if (!Number.isFinite(value)) return 'Invalid value';
    if (value < 0) return 'Invalid value';
    if (value === 0) return '0 B';

    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] as const;
    const BYTES_PER_UNIT = 1024;

    const unitLevel = Math.floor(Math.log(value) / Math.log(BYTES_PER_UNIT));
    const normalizedLevel = Math.min(unitLevel, UNITS.length - 1);

    const finalValue = value / Math.pow(BYTES_PER_UNIT, normalizedLevel);
    const formattedValue = Number(finalValue.toFixed(decimals)).toString();

    return `${formattedValue} ${UNITS[normalizedLevel]}` as FormattedBytes;
};

export default formatBytes;
