import * as storage from "./localStorage/index"
import * as http from "./request/http"
import * as addPending from "./request/cancel"
import * as constants from "./constants"
import * as formatFontSize from "./formatFontSize"

export {
  storage,
  http,
  addPending,
  constants,
  // remToPx, pxToRem
  formatFontSize
}