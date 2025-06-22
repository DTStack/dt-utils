// ========== export some dependencies ==========
export { default as dayjs } from 'dayjs';
export * as idb from 'idb';
export { default as Cookie } from 'js-cookie';
export * as lodash from 'lodash-es';

// ========== export utils ==========
export { default as checkBrowserSupport } from './checkBrowserSupport';
export { default as copy } from './copy';
export { default as downloadFile } from './downloadFile';
export { default as formatBytes } from './formatBytes';
export { default as formatDateTime } from './formatDateTime';
export { default as formatSecond } from './formatSecond';
export { default as fromBase64 } from './fromBase64';
export { default as generateUrlWithQuery } from './generateUrlWithQuery';
export { default as getKey } from './getKey';
export { default as getQueryParameters } from './getQueryParameters';
export { default as getTypeOfValue } from './getTypeOfValue';
export { default as isMacOS } from './isMacOS';
export { default as isMobile } from './isMobile';
export { default as isWindows } from './isWindows';
export { default as localDB } from './localDB';
export { default as LocalIndexedDB } from './localIndexedDB';
export { default as sessionDB } from './sessionDB';
export { default as shouldRender } from './shouldRender';
export { default as toBase64 } from './toBase64';
export { default as toPercent } from './toPercent';
export { default as toSortOrder } from './toSortOrder';
export { default as toThousand } from './toThousand';
export { default as trim } from './trim';
