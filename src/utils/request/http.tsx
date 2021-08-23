import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LoginInfo } from "@models/loginInfo";
import { storage } from "@utils/index";
import qs from 'qs';
import {
  addPending,
  removePending
} from "./cancel";

const rq = axios.create({
  baseURL: "localhost:8000", // baseURL of the
  timeout: 3000,
  // port: 3000,
});

rq.interceptors.request.use((config: AxiosRequestConfig) => {
  let userInfo: Partial<LoginInfo> = {};
  try {
    userInfo = storage.get("userInfo");
  } catch(error) {
    userInfo={}
    throw error;
  }
  // config.headers.xs = 
  addPending(config);
  return config;
})

rq.interceptors.response.use(
  (res: AxiosResponse) => {
    removePending(res);
    return res.data as any;
  },
  (err) => {
    if (!axios.isCancel(err)) {
      console.error(err);
    }
  }
);

const http = {
  get(url: string) {
    return rq({
      url: url,
      method: "GET",
    });
  },
  post(url: string, params = {}) {
    return rq({
      url: url,
      method: "POST",
      // 将对象序列化成URL的形式，以&进行拼接
      data: qs.stringify(params),
    });
  },
  delete(url: string, params = {}) {
    return rq({
      url: url,
      method: "DELETE",
      data: qs.stringify(params),
    });
  },
  put(url: string, params = {}) {
    return rq({
      url: url,
      method: 'PUT',
      data: qs.stringify(params),
    });
  },
};
export { http };
