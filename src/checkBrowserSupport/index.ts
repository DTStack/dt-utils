import UAParser from 'ua-parser-js';

import compareVersions from './compareVersions';

type Version = string | number;

export interface IBrowser {
    name: string;
    version: Version;
}

/**
 * 检查当前浏览器是否满足最低版本要求
 *
 * @category 环境检测
 * @description
 * 该函数会检查当前浏览器的版本是否大于或等于指定的最低版本要求。
 * 如果当前浏览器不在指定的浏览器列表中，将返回 false。
 *
 * @param {IBrowser[]} browsers - 浏览器最低版本配置数组
 * - `name`: 浏览器名称，不区分大小写（如：'chrome'、'firefox'、'safari'等）
 * - `version`: 最低版本号要求，支持字符串或数字格式（如：'80'、75、'13.0.1'等）
 * @returns {boolean} 返回检查结果
 * - 当前浏览器版本满足要求时，返回 `true`
 * - 当前浏览器版本不满足要求或浏览器类型不匹配时，返回 `false`
 * - 传入空数组时，返回 `false`
 *
 * @example
 * ```typescript
 * import { checkBrowserSupport } from 'dt-utils';
 *
 * // 检查单个浏览器版本要求
 * checkBrowserSupport([
 *   { name: 'chrome', version: '80' }
 * ]);
 *
 * // 检查多个浏览器版本要求（满足其中之一即可）
 * checkBrowserSupport([
 *   { name: 'chrome', version: '80' },
 *   { name: 'firefox', version: '75' },
 *   { name: 'safari', version: '13' }
 * ]);
 *
 * // 版本号支持字符串或数字格式
 * checkBrowserSupport([
 *   { name: 'chrome', version: 80 },
 *   { name: 'firefox', version: '75.0.1' }
 * ]);
 * ```
 */
function checkBrowserSupport(browsers: IBrowser[]): boolean {
    if (!Array.isArray(browsers)) throw new TypeError(`${browsers} is not array`);

    if (browsers.length === 0) {
        return false;
    }

    const parser = new UAParser();
    const currentBrowser = parser.getBrowser();
    const currentBrowserName = String(currentBrowser.name).toLowerCase();
    const currentBrowserVersion = currentBrowser.version ?? '0';

    const browserVersionMap = new Map(
        browsers.map(({ name, version }) => [name.toLowerCase(), String(version)])
    );

    const requiredVersion = browserVersionMap.get(currentBrowserName);
    if (!requiredVersion) {
        return false;
    }

    return compareVersions(currentBrowserVersion, requiredVersion) >= 0;
}

export default checkBrowserSupport;
