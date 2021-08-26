/*
 * @Author: your name
 * @Date: 2021-08-25 11:22:45
 * @LastEditTime: 2021-08-25 14:45:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/utils/index.tsx
 */
import * as localStorage from "./localStorage/index"
import * as http from "./request/http"
import * as addPending from "./request/cancel"
import * as constants from "./constants"
import * as formatFontSize from "./formatFontSize"

export {
  localStorage,
  http,
  addPending,
  constants,
  // remToPx, pxToRem
  formatFontSize
}