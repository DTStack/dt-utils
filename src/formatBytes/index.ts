type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB';

type FormattedBytes = `${number} ${ByteUnit}` | 'Invalid value' | '0 B';

/**
 * Formats a numeric byte value into a string with appropriate size units.
 *
 * @category Formatting
 * @description
 * Converts a byte value into a human-readable string representation with the most appropriate
 * size unit, ranging from Bytes (B) to Yottabytes (YB). The conversion uses 1024 as the base
 * unit multiplier (1 KB = 1024 B).
 *
 * @param {number} value - The numeric value in bytes to format
 * @param {number} [decimals=2] - The number of decimal places to round to (defaults to 2)
 * @returns {FormattedBytes} A formatted string in the format "value unit" (e.g. "1.5 MB") or error message
 *
 * @example
 * ```typescript
 * import { formatBytes } from 'dt-utils';
 *
 * // Basic formatting
 * formatBytes(1024)        // => "1 KB"
 * formatBytes(1536)        // => "1.5 KB"
 * formatBytes(1048576)     // => "1 MB"
 *
 * // Specifying decimal places
 * formatBytes(1234567, 1)  // => "1.2 MB"
 * formatBytes(1234567, 3)  // => "1.178 MB"
 *
 * // Large numbers
 * formatBytes(1.5e12)      // => "1.36 TB"
 *
 * // Edge cases
 * formatBytes(0)           // => "0 B"
 * formatBytes(-1024)       // => "Invalid value"
 * formatBytes(Infinity)    // => "Invalid value"
 * formatBytes(NaN)         // => "Invalid value"
 * ```
 *
 * @see {@link https://en.wikipedia.org/wiki/Byte#Multiple-byte_units} for more information about byte units
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
