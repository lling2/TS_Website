/*
 * @Author: your name
 * @Date: 2021-08-23 11:16:51
 * @LastEditTime: 2021-08-23 15:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/utils/formatFontSize.tsx
 */
export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}
  