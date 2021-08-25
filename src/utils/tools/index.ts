/*
 * @Author: your name
 * @Date: 2021-08-25 14:30:43
 * @LastEditTime: 2021-08-25 16:42:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/utils/tools/index.ts
 */
export function formatDateTime (expireTime: number): number {
    const thisTime = expireTime.toString().replace(/-/g, '/')
    let time = new Date(thisTime)
    let data = time.getTime()
    return data
}
