/**:
 * @description: 时间格式化
 * @author: Created by 景明 on 2021-08-26 15:57:25
 */

import dayjs from 'dayjs';

/**
 * 树形布局计算
 */
const dateTime = {
    /**
   * 返回 YYYY-MM-DD HH:mm:ss 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatDateTime (timeData: string | number | Date) {
        return dayjs(timeData).format('YYYY-MM-DD HH:mm:ss');
    },
    /**
   * 返回 YYYY-MM-DD 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatDate (timeData: string | number | Date) {
        return dayjs(timeData).format('YYYY-MM-DD');
    },
    /**
   * 返回 YYYY-MM-DD HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatDateHours (timeData: string | number | Date) {
        return dayjs(timeData).format('YYYY-MM-DD HH:mm');
    },
    /**
   * 返回 MM-DD HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatDayHours (timeData: string | number | Date) {
        return dayjs(timeData).format('MM-DD HH:mm');
    },
    /**
   * 返回 HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatHours (timeData: string | number | Date) {
        return dayjs(timeData).format('HH:mm');
    },
    /**
   * 返回 HH:mm:ss 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
    formatMinute (timeData: string | number | Date) {
        return dayjs(timeData).format('HH:mm:ss');
    },
};

export default dateTime;
