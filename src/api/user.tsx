import { http } from '../utils/index'

// 获取用户信息
export function getUserInfo(param: { code: string }) {
  return http.post("/api/getUserInfo", {
    ...param,
  });
}

// 退出
export function loginOut() {
  return http.get("/api/loginOut")
}
