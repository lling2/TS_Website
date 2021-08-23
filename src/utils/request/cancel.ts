/*
 * @Author: your name
 * @Date: 2021-08-23 14:18:35
 * @LastEditTime: 2021-08-23 14:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/utils/request/cancel.tsx
 */
import axios,{ CancelToken, Method, Canceler } from 'axios';
const pending = new Map<string, Canceler>();

type Config = {
    method: Method,
    port: number,
    url: string,
    params?: any;
    cancelToken?: CancelToken;
    data?: any
}

export const addPending = (config: Config) => {
    const url = [
        config.method,
        config.url,
        JSON.stringify(config.params),
        JSON.stringify(config.data),
    ].join("&");

    config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        pending.set(url, cancel);
      }
    });
}

export const removePending = (config: Config) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data),
  ].join("&");
  if (pending.has(url)) {
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};
export const clearPending = () => {
  pending.forEach((cancel, url) => {
    cancel(url);
  });
  pending.clear();
};
