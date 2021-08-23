/*
 * @Author: your name
 * @Date: 2021-08-23 11:16:51
 * @LastEditTime: 2021-08-23 13:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/recoil/selectors/loginSelectors/index.tsx
 */
import { selector } from 'recoil';
// 默认值
import { loginState } from '@recoil/atoms/loginAtoms';
import { LoginInfo } from "@models/loginInfo";
import { storage } from "@utils/index";

export const loginSelect = selector({
  key: 'loginSelect',
  get: ({ get }) => {
    let loginInfo = get(loginState);
    if(!loginInfo.userName){
      try {
        loginInfo = storage.get('userInfo') || loginInfo
      }catch(error) {
        throw error;
      }
    };
    return loginInfo;
  },
  set: ({set}, newVal: LoginInfo) => {
    set(loginState, newVal);
  }
});