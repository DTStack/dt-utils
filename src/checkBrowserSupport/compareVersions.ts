/**
 * 比较两个版本号
 *
 * @private
 * @param version1 第一个版本号
 * @param version2 第二个版本号
 * @returns {number} 当 version1 > version2 时返回 1 ，当 version1 < version2 时返回 -1 ，相等时返回 0
 */
function compareVersions(version1: string, version2: string): number {
    const v1Parts = version1.split('.').map(Number);
    const v2Parts = version2.split('.').map(Number);

    const maxLength = Math.max(v1Parts.length, v2Parts.length);

    for (let i = v1Parts.length; i < maxLength; i++) {
        v1Parts[i] = 0;
    }
    for (let i = v2Parts.length; i < maxLength; i++) {
        v2Parts[i] = 0;
    }

    for (let i = 0; i < maxLength; i++) {
        if (v1Parts[i] > v2Parts[i]) {
            return 1;
        }
        if (v1Parts[i] < v2Parts[i]) {
            return -1;
        }
    }

    return 0;
}

export default compareVersions;
