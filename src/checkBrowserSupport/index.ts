import UAParser from 'ua-parser-js';

import compareVersions from './compareVersions';

type Version = string | number;

export interface IBrowser {
    name: string;
    version: Version;
}

/**
 * Checks if the current browser meets minimum version requirements
 *
 * @category Environment Detection
 * @description
 * A utility function that validates whether the current browser satisfies specified minimum version
 * requirements. The function accepts an array of browser specifications and performs version
 * comparison checks.
 *
 * @param {IBrowser[]} browsers - An array of browser specifications, where each specification contains:
 * - `name`: Browser name (e.g., 'chrome', 'firefox', 'safari')
 * - `version`: Minimum required version number
 * @returns {boolean} Returns `true` if current browser meets version requirements, `false` otherwise
 *
 * @example
 * ```typescript
 * import { checkBrowserSupport } from 'dt-utils';
 *
 * // Single browser check
 * checkBrowserSupport([
 *   { name: 'chrome', version: '80' }
 * ]);
 *
 * // Multiple browser support
 * checkBrowserSupport([
 *   { name: 'chrome', version: '80' },
 *   { name: 'firefox', version: '75' },
 *   { name: 'safari', version: '13' }
 * ]);
 *
 * // Version can be string or number
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
